import { mergeTypes } from "merge-graphql-schemas";

// import Schema Types here
import Game from './Game'

const typeDefs = [Game];

export default mergeTypes(typeDefs);