// logout function for logout button found in navbar when user is logged in.
async function logout() {
    const logoutRes = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (logoutRes.ok) {
      document.location.replace('/');
    } else {
      alert(logoutRes.statusText);
    }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);