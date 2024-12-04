// profile.js (Display user profile)
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, fetch their profile data from Firestore
      const userRef = firebase.firestore().collection("users").doc(user.uid);
  
      userRef.get().then((doc) => {
        if (doc.exists) {
          const userData = doc.data();
  
          // Display user data in profile section
          document.getElementById("profileName").innerText = `${userData.firstName} ${userData.lastName}`;
          document.getElementById("profileEmail").innerText = userData.email;
          
          // If the user has a profile picture, display it
          if (userData.profilePhotoUrl) {
            document.getElementById("profileImage").src = userData.profilePhotoUrl;
          } else {
            document.getElementById("profileImage").src = "default-avatar.png"; // Use a default avatar image if no photo
          }
        } else {
          alert("User data not found!");
        }
      });
    } else {
      // If the user is not signed in, redirect to the login page
      window.location.href = "login.html";
    }
  });
  

// profile.js (Logout functionality)
document.getElementById("logoutBtn").addEventListener("click", () => {
    firebase.auth().signOut().then(() => {
      window.location.href = "login.html"; // Redirect to login page after logout
    }).catch((error) => {
      console.error("Error logging out: ", error);
    });
  });
  