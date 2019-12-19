import { Request, Response, NextFunction } from 'express';
import validate from '../util/validate';

const schemaPosts = {
  page: {
    type: 'number',
    minimum: 1,
    default: 1,
  },
  limit: {
    type: 'number',
    minimum: 1,
    maximum: 200,
    default: 20,
  },
};

export function getPosts(req: Request, res: Response, next: NextFunction) {
  const options = {
    useDefaults: true,
    coerceTypes: true,
  };
  const schema = {
    properties: schemaPosts,
  };
  const valid = validate(schema, req.query, options);
  if (valid.errorsText) {
    return next({
      statusCode: 422,
      message: valid.errorsText,
      code: 'WRONG_QUERY',
      data: valid,
    });
  }
  res.status(200).json({ message: 'success!' });
}
