import { mergeResolvers } from "merge-graphql-schemas";

// import Resolvers here
import Game from "./Game";

const resolvers = [Game];

export default mergeResolvers(resolvers);