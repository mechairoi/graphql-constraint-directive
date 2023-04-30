import error from "graphql/error";
import validator from "validator";
const { GraphQLError } = error;
const { isEmail } = validator;
export default (value) => {
    if (isEmail(value))
        return true;
    throw new GraphQLError('Must be in email format');
};
