import refs from '/js/refs';

refs.contactsUsForm.addEventListener('input', onContactsUsFormInput);

function onContactsUsFormInput(e) {
  const contactsUsFormData = {};

  const formData = new FormData(e.currentTarget);
  formData.forEach((value, key) => {
    contactsUsFormData[key] = value;
  });

  const formValues = Object.values(contactsUsFormData);
  console.log(contactsUsFormData);
  refs.contactsUsFormSubmitBtn.disabled = formValues.some((value) => !value);
}
