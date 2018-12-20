const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding')

const resolvers  = {
  Query: {
    info: () => `This is the API for GraphQL.`,
    games: (root, args, context, info) => {
      return context.db.query.games({}, info)
    },
    game: (root, args, context, info) => {
      return context.db.query.game({}, info)
    }
  },
  Mutation: {
    addGame: (root, args, context, info) => {
      return context.db.mutation.createGame({
        data: {
          frames: args.frames
        },
      }, info)
    }
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/justin-yum-a90f29/bowling-service/dev',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
})
server.start(() => console.log(`Server is running on http://localhost:4000`))