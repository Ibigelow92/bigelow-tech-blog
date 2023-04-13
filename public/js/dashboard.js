const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blogpost-title').value.trim();
  const blogpost_text = document.querySelector('#blogpost-text').value.trim();
  // const description = document.querySelector('#project-desc').value.trim();

  if (title && blogpost_text) {
    // Where is this /api/projects?
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ title, blogpost_text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    // Where is this /api/projects?
    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-blogpost-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blogpost-list')
  .addEventListener('click', delButtonHandler);


// const signupFormHandler = async (event) => {
    
//     event.preventDefault();
  
//     const name = document.querySelector('#new-name-input').value.trim(); /* Done */
//     const email = document.querySelector('#new-email-input').value.trim(); /* Done */
//     const password = document.querySelector('#new-password-input').value.trim(); /* Done */
  
//     if (name && email && password) {
//       const response = await fetch('/api/users', {
//         method: 'POST',
//         body: JSON.stringify({ name, email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/'); //Actually, what do I put here?
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };

//   document
//     .querySelector('#create-account-form')
//     .addEventListener('submit', signupFormHandler);
  