import Ajv from 'ajv';
function validate(schema: object, data: any, options?: any) {
  const ajv = new Ajv(options);
  const isValid = ajv.validate(schema, data);
  if (!isValid) return { errors: ajv.errors, errorsText: ajv.errorsText() };
  return data;
}

export default validate;
