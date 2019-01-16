import Game from "../../models/Game";
import * as uuid from "uuid";

export default {
  Query: {
    game: (root, {id}) => {
      return new Promise((resolve, reject) => {
        Game.findOne(id).exec((err, res) => {
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
      const { rollScores, currentFrame, frameScores, gameOver } = game
      const id = uuid.v4();
      const newGame = new Game({id, rollScores, currentFrame, frameScores, gameOver});

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