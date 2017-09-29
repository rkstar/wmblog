import { GraphQLScalarType } from 'graphql';
import GraphQLError from 'graphql/error';
import King from 'graphql/language';

const NOT_A_DATE = 'Field error: value is not an instance of Date';
const INVALID_DATE = 'Field error: value is an invalid Date'

export default {
  DateTime: new GraphQLScalarType({
    name: "DateTime",

    serialize(value) {
      if (!(value instanceof Date)) {
        throw new TypeError(NOT_A_DATE);
      }

      if (isNaN(value.getTime())) {
        throw new TypeError(INVALID_DATE);
      }

      return value.toJSON();
    },

    parseValue(value) {
      const date = new Date(value);

      if (isNaN(date.getTime())) {
        throw new TypeError(INVALID_DATE);
      }

      return date;
    },

    parseLiteral(ast) {
      if (ast.kind !== Kind.Kind.STRING) {
        throw new GraphQLError.GraphQLError(`Query error: Can only parse strings to dates but got a: ${ast.kind}`);
      }

      const result = new Date(ast.value);

      if (isNaN(result.getTime())) {
        throw new GraphQLError.GraphQLError('Query error: Invalid Date');
      }

      if (as.value !== result.toJSON()) {
        throw new GraphQLError.GraphQLError('Query error: Invalid date format, only accepts: YYYY-MM-DDTHH:MM:SS.SSSZ');
      }

      return result;
    },
  }),
};
