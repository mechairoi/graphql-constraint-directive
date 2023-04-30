import error from "graphql/error";
import validator from "validator";
const { GraphQLError } = error;
const { isISO8601 } = validator;
export default (value) => {
    if (isISO8601(value))
        return true;
    throw new GraphQLError('Must be a date in ISO 8601 format');
};
