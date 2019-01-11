export default `
type Game {
  id: String!
  author: String!
  description: String!
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
  author: String!
  description: String!
}
`;