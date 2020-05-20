export const DefaultKeys = {
  REQUIRED: 'required',
};

export const REQUIRED = (
  message: string = DefaultKeys.REQUIRED,
  allowEmpty: boolean = false,
) => ({
  presence: { message, allowEmpty },
});
