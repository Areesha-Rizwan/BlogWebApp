// dashboard.js

// Get user data from Firebase Authentication and Firestore
auth.onAuthStateChanged(user => {
    if (user) {
      // User is logged in, fetch profile details
      const db = firebase.firestore();
      const userDoc = db.collection("users").doc(user.uid);
  
      userDoc.get().then(doc => {
        if (doc.exists) {
          const userData = doc.data();
          
          // Display user details on dashboard
          document.getElementById('user-name').textContent = userData.firstName + " " + userData.lastName;
          document.getElementById('user-email').textContent = user.email;
          document.getElementById('user-firstname').textContent = userData.firstName;
          document.getElementById('user-lastname').textContent = userData.lastName;
        } else {
          console.log("No user data found");
        }
      }).catch(error => {
        console.log("Error getting user data: ", error);
      });
    } else {
      // User is not logged in, redirect to login page
      window.location.href = "login.html";
    }
  });
  
  // Logout functionality
  document.getElementById('logout-btn').addEventListener('click', () => {
    auth.signOut().then(() => {
      window.location.href = "login.html";
    }).catch(error => {
      alert(error.message);
    });
  });
  