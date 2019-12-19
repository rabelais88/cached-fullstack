import { CustomError } from '../types/error-type';

function makeError({
  statusCode,
  message,
  code,
  data,
}: { statusCode: number, message: string, code: string, data: any}) {
  const err:CustomError = <CustomError>Error(message);
  err.statusCode = statusCode;
  err.code = code;
  err.data = data;
  return err;
}

export default makeError;
