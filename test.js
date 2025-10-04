const BACKEND_URL = "https://script.google.com/macros/s/AKfycbxmG-QPmH3jojJU2dsoOLBzOUbLMWCneeUr4DoP3AVenKqutAC4TaZo2tRrM4lgN_9_oA/exec"; // e.g. https://script.google.com/macros/s/AKfy.../exec

// ---- Test 1: LOGIN ----
async function testLogin() {
  const res = await fetch(BACKEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "login",
      username: "agent1",   // change to match your Users sheet
      password: "pass1"
    })
  });
  const data = await res.json();
  console.log("Login result:", data);
}

// ---- Test 2: GET CUSTOMERS ----
async function testGetCustomers() {
  const res = await fetch(BACKEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "getCustomers"
    })
  });
  const data = await res.json();
  console.log("Customers list:", data);
}

// ---- Test 3: UPDATE CUSTOMER STATUS ----
async function testUpdateCustomerStatus() {
  const res = await fetch(BACKEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "updateCustomerStatus",
      phone: "9876543210",   // must exist in Customers sheet
      agent: "agent1",       // must match AssignedTo column
      status: "Interested",
      notes: "Followed up on 4th Oct"
    })
  });
  const data = await res.json();
  console.log("Update result:", data);
}

// ---- Run all tests ----
(async () => {
  await testLogin();
  await testGetCustomers();
  await testUpdateCustomerStatus();
})();
