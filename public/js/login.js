const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

const registerFormHandler = async (event) => {
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
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.create-acct-form')
  .addEventListener('submit', registerFormHandler);





// Done?

// const loginFormHandler = async (event) => {
//     // Stop the browser from submitting the form so we can do so with JavaScript
//     event.preventDefault();
  
//     // Gather the data from the form elements on the page
//     const email = document.querySelector('#email-input').value.trim(); /* Done */
//     const password = document.querySelector('#password-input').value.trim(); /* Done */
  
//     if (email && password) {
//       // Send the e-mail and password to the server
//       // Okay, but what's happening here specifically? The /api/users/login part
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to log in');
//       }
//     }
//   };
  
//   document
//     .querySelector('#login-form') /* Done */
//     .addEventListener('submit', loginFormHandler); /* ? */
  