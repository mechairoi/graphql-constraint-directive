import { GraphQLError } from "graphql";
import validator from "validator";
const { isBase64 } = validator;
export default (value) => {
    if (isBase64(value))
        return true;
    throw new GraphQLError('Must be in byte format');
};
