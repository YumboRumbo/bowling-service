export default `
type Game {
  id: String!
  rollScores: [[Int!]!]!
  currentFrame: Int!
  frameScores: [Int!]!
  gameOver: Boolean!
}

type Query {
  game(id: String!): Game!
  games: [Game!]!
}

type Mutation {
  createGame(game: CreateGameInput): Game!
  deleteGame(id: String!): Game!
}

input CreateGameInput {
  rollScores: [[Int!]!]!
  currentFrame: Int!
  frameScores: [Int!]!
  gameOver: Boolean!
}
`;