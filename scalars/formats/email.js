import { GraphQLError } from "graphql";
import validator from "validator";
const { isEmail } = validator;
export default (value) => {
    if (isEmail(value))
        return true;
    throw new GraphQLError('Must be in email format');
};
