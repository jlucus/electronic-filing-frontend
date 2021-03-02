import PasswordValidator from 'password-validator';

const filerPasswordValidator = new PasswordValidator();
filerPasswordValidator
  .is().min(16)
  .has().uppercase(1)
  .has()
  .lowercase(1)
  .has()
  .digits(1)
  .has()
  .symbols(1)
  .has()
  .not()
  .spaces()
;
const errorPasswordMessageMap = {
  min: 'the password length must be more than 16.',
  uppercase: 'the password must contain at least one uppercase character',
  lowercase: 'the password must contain at least one lowercase character',
  digits: 'the password must contain at least one digit',
  symbols: 'the password must contain at least one special character',
  spaces: 'the password should not contain a whitespace',
};

const filerPasswordValidate = (value) => {
  const validResult = filerPasswordValidator.validate(value, { list: true });
  if (validResult.length === 0) {
    return true;
  }
  return 'Password not sufficiently strong. Please see instructions above.';
};

export { filerPasswordValidator, filerPasswordValidate };
