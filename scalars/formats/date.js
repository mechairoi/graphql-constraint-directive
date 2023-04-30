import { GraphQLError } from "graphql";
import validator from "validator";
const { isISO8601 } = validator;
export default (value) => {
    if (isISO8601(value))
        return true;
    throw new GraphQLError('Must be a date in ISO 8601 format');
};
