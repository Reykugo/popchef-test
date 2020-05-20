import { REQUIRED } from '../../technical/validation/rules';

export const createArticleValidation = {
  text: {
    type: 'string',
    ...REQUIRED(),
  },
  label: {
    type: 'string',
    ...REQUIRED(),
  },
};
