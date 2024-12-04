// login.js (Firebase login logic)
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    // Redirect to dashboard after successful login
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message); // Handle the error properly
  }
});


window.location.href = "dashboard.html";  // Redirect to dashboard


// firebase.js (to check authentication status on page load)
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // Redirect to dashboard if user is logged in
    window.location.href = "dashboard.html";
  } else {
    // If no user is logged in, show login or signup page
    window.location.href = "login.html";  // or show your login/signup page
  }
});

