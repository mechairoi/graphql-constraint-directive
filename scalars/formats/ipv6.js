import error from "graphql/error";
import validator from "validator";
const { GraphQLError } = error;
const { isIP } = validator;
export default (value) => {
    if (isIP(value, 6))
        return true;
    throw new GraphQLError('Must be in IP v6 format');
};
