import error from "graphql/error";
import validator from "validator";
const { GraphQLError } = error;
const { isBase64 } = validator;
export default (value) => {
    if (isBase64(value))
        return true;
    throw new GraphQLError('Must be in byte format');
};
