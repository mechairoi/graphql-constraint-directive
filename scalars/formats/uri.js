import error from "graphql/error";
import validator from "validator";
const { GraphQLError } = error;
const { isURL } = validator;
export default (value) => {
    if (isURL(value))
        return true;
    throw new GraphQLError('Must be in URI format');
};
