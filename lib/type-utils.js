import { GraphQLFloat, GraphQLInt, GraphQLString, isNonNullType, isScalarType, isListType } from "graphql";
import { ConstraintStringType, validate as validateStringFn } from "../scalars/string.js";
import { ConstraintNumberType, validate as validateNumberFn } from "../scalars/number.js";
function getConstraintTypeObject(fieldName, type, uniqueTypeName, directiveArgumentMap) {
    if (type === GraphQLString) {
        return new ConstraintStringType(fieldName, uniqueTypeName, type, directiveArgumentMap);
    }
    else if (type === GraphQLFloat || type === GraphQLInt) {
        return new ConstraintNumberType(fieldName, uniqueTypeName, type, directiveArgumentMap);
    }
    else {
        throw new Error(`Not a valid scalar type: ${type.toString()}`);
    }
}
function getConstraintValidateFn(type) {
    if (type === GraphQLString) {
        return validateStringFn;
    }
    else if (type === GraphQLFloat || type === GraphQLInt) {
        return validateNumberFn;
    }
    else {
        throw new Error(`Not a valid scalar type: ${type.toString()}`);
    }
}
function getScalarType(fieldConfig) {
    if (isScalarType(fieldConfig)) {
        return { scalarType: fieldConfig };
    }
    else if (isListType(fieldConfig)) {
        return { ...getScalarType(fieldConfig.ofType), list: true };
    }
    else if (isNonNullType(fieldConfig) && isScalarType(fieldConfig.ofType)) {
        return { scalarType: fieldConfig.ofType, scalarNotNull: true };
    }
    else if (isNonNullType(fieldConfig)) {
        return { ...getScalarType(fieldConfig.ofType.ofType), list: true, listNotNull: true };
    }
    else {
        throw new Error(`Not a valid scalar type: ${fieldConfig.toString()}`);
    }
}
export { getConstraintTypeObject };
export { getConstraintValidateFn };
export { getScalarType };
export default {
    getConstraintTypeObject,
    getConstraintValidateFn,
    getScalarType
};
