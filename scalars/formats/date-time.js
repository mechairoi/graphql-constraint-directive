import { GraphQLError } from "graphql";
import validator from "validator";
const { isRFC3339 } = validator;
export default (value) => {
    if (isRFC3339(value))
        return true;
    throw new GraphQLError('Must be a date-time in RFC 3339 format');
};
