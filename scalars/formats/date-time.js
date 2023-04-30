import error from "graphql/error";
import validator from "validator";
const { GraphQLError } = error;
const { isRFC3339 } = validator;
export default (value) => {
    if (isRFC3339(value))
        return true;
    throw new GraphQLError('Must be a date-time in RFC 3339 format');
};
