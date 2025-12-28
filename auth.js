// ---------- AUTH SYSTEM SHARED JS ----------

// Get currently logged in user email
function getActiveUserEmail() {
  return localStorage.getItem("activeUser");
}

// Redirect to login if no login session
function protectPage() {
  if (!getActiveUserEmail()) {
    alert("Please login first!");
    window.location.href = "index.html";
  }
}

// Load user-specific data
function loadData(key, defaultValue = []) {
  const email = getActiveUserEmail();
  const data = localStorage.getItem(`${key}_${email}`);
  return data ? JSON.parse(data) : defaultValue;
}

// Save user-specific data
function saveData(key, value) {
  const email = getActiveUserEmail();
  localStorage.setItem(`${key}_${email}`, JSON.stringify(value));
}

// Logout
function logoutNow() {
  localStorage.removeItem("activeUser");
  window.location.href = "index.html";
}
