import error from "graphql/error";
import validator from "validator";
const { GraphQLError } = error;
const { isUUID } = validator;
export default (value) => {
    if (isUUID(value))
        return true;
    throw new GraphQLError('Must be in UUID format');
};
