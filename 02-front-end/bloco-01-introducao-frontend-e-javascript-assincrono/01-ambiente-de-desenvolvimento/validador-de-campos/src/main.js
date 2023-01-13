import validator from 'validator';

const textValidator = document.getElementById('text-validator');
const selectValidator = document.getElementById('select-validator');
const buttonValidator = document.getElementById('button-validator');
const textResult = document.getElementById('text-result');

let selectValue = selectValidator.value;

selectValidator.addEventListener('change', () => {
  selectValue = selectValidator.value;
});

buttonValidator.addEventListener('click', () => {
  if (selectValue === 'email') {
    const returnValidation = validator.isEmail(textValidator.value);
    textResult.innerText = `A validação retornou ${returnValidation}`;
  }
  if (selectValue === 'phoneNumber') {
    const returnValidation = validator.isMobilePhone(textValidator.value,['pt-BR']);
    textResult.innerText = `A validação retornou ${returnValidation}`;
  }
  if (selectValue === 'licensePlate') {
    const returnValidation = validator.isLicensePlate(textValidator.value,['pt-BR']);
    textResult.innerText = `A validação retornou ${returnValidation}`;
  }
  if (selectValue === 'taxId') {
    const returnValidation = validator.isTaxID(textValidator.value,['pt-BR']);
    textResult.innerText = `A validação retornou ${returnValidation}`;
  }
  if (selectValue === 'passport') {
    const returnValidation = validator.isPassportNumber(textValidator.value,'BR');
    textResult.innerText = `A validação retornou ${returnValidation}`;
  }
});