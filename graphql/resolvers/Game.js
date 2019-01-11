import Game from "../../models/Game";
import * as uuid from "uuid";

export default {
  Query: {
    game: (root, args) => {
      return new Promise((resolve, reject) => {
        Game.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        })
      }) 
    },
    games: () => {
      return new Promise((resolve, reject) => {
        Game.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
  },
  Mutation: {
    createGame: (root, {game}) => {
      const { author, description} = game
      const id = uuid.v4();
      const newGame = new Game({id, author, description});

      return new Promise((resolve, reject) => {
        newGame.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteGame: (root, {id}) => {
      return new Promise((resolve, reject) => {
        Game.findOneAndRemove(id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};