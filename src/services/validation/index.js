function _isInputValid(val, validation) {
  if (!validation) return true;
  let isValid = true;
  let value = val.trim();

  if (validation.required) {
    isValid = value !== '';
  }

  if (validation.email) {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isValid = reg.test(value);
  }

  if (validation.minLength) {
    isValid = value.length >= validation.minLength;
  }

  return isValid;
}

function _isFormValid(formControls) {
  let formValid = true;
  Object.keys(formControls).forEach(control => formValid = formControls[control].valid && formValid);

  return formValid;
}

const changeInput = function(formControls, controlName, value) {
  formControls[controlName].touched = true;
  formControls[controlName].value = value;
  formControls[controlName].valid = _isInputValid(value, formControls[controlName].validation);

  let formValid = _isFormValid(formControls);

  return { formControls, formValid };
};

export { changeInput }
