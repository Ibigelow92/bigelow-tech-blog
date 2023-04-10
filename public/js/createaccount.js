const signupFormHandler = async (event) => {
    
    event.preventDefault();
  
    const name = document.querySelector('#new-name-input').value.trim();
    const email = document.querySelector('#new-email-input').value.trim();
    const password = document.querySelector('#new-password-input').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/'); //Actually, what do I put here?
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('#create-account-form')
    .addEventListener('submit', signupFormHandler);
  