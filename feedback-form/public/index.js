document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#feedbackForm');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
      const formDataObject = {};
      
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
  
      console.log('Form data:', formDataObject);
    });
  });