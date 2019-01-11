export default `
type Game {
  id: ID!
  author: String!
  description: String!
}

type Query {
  game(id: ID!): Game!
  games: [Game!]!
}

type Mutation {
  createGame(game: CreateGameInput): Game!
  deleteGame(id: ID!): Game!
}

input CreateGameInput {
  author: String!
  description: String!
}
`;