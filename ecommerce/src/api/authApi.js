const BASE_URL = "http://localhost:9090";

// LOGIN
export async function loginUser(username, password) {
  const response = await fetch(`${BASE_URL}/api/users/authenticate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  return response.json();
}

// REGISTER
export async function registerUser(data) {
  const response = await fetch(`${BASE_URL}/api/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return response.json();
}

// USER PROFILE (JWT required)
export async function fetchUserProfile(token) {
  const response = await fetch(`${BASE_URL}/api/users/profile`, {
    method: "GET",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });

  return response.json();
}
