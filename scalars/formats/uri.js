import { GraphQLError } from "graphql";
import validator from "validator";
const { isURL } = validator;
export default (value) => {
    if (isURL(value))
        return true;
    throw new GraphQLError('Must be in URI format');
};
