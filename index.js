const url = 'http://181.4.96.143:3800/templates';

fetch(url)
.then(Response => Response.json())
.then(data => {
    const apiData = [];

const selectElement = document.getElementById('template');

data.forEach(item => {
  const optionElement = document.createElement('option');
  optionElement.value = item.name; // Set the value of the option
  optionElement.textContent = item.name; // Set the label of the option
  selectElement.appendChild(optionElement); // Append the option to the select element
});
})
.catch(err=>console.log(err))


const contactButton = document.getElementById('contact-button');
const contactFormContainer = document.getElementById('contact-form-container');

contactButton.addEventListener('click', () => {
  contactFormContainer.style.left = '0';
});

contactFormContainer.addEventListener('click', (event) => {
  if (event.target === contactFormContainer) {
    contactFormContainer.style.left = '-400px';
  }
});