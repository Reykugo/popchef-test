import { RequestHandler, Request, Response, NextFunction } from 'express';
import validate from 'validate.js';

/**
 * Wraps an express middleware to validate its body
 *
 * Returns a 400 with an error body in case of validation failure
 *
 * @param spec Validation rules to send to the validate function
 */
export function validateRequest(
  spec: Function | {},
  errorMessage: string,
): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors = validate(req.body, spec instanceof Function ? spec() : spec);

    if (errors) {
      return res.status(400).send({ message: errorMessage });
    }
    return next();
  };
}
