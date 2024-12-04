// signup.js (Firebase signup logic)
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    
    // Set additional user data (like first name, last name) to Firebase Firestore if needed
    const userRef = firebase.firestore().collection("users").doc(user.uid);
    await userRef.set({
      firstName,
      lastName,
      email: user.email,
    });

    // Redirect to dashboard after successful signup
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message); // Handle the error properly
  }
});
