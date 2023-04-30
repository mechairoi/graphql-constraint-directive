import { GraphQLError } from "graphql";
import validator from "validator";
const { isUUID } = validator;
export default (value) => {
    if (isUUID(value))
        return true;
    throw new GraphQLError('Must be in UUID format');
};
