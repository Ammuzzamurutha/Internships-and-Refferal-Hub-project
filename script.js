let internships = [
  { role: "Frontend Intern", company: "Google", location: "Remote" },
  { role: "Backend Intern", company: "Amazon", location: "Hyderabad" }
];

// Display internships
function displayInternships(data) {
  const list = document.getElementById("internship-list");
  list.innerHTML = "";

  data.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3>${item.role}</h3>
      <p>${item.company}</p>
      <p>${item.location}</p>
      <button onclick="applyInternship('${item.role}')">Apply</button>
    `;

    list.appendChild(div);
  });
}

// Add internship
function addInternship() {
  const role = document.getElementById("role").value;
  const company = document.getElementById("company").value;
  const location = document.getElementById("location").value;

  if (role && company && location) {
    internships.push({ role, company, location });
    displayInternships(internships);

    document.getElementById("role").value = "";
    document.getElementById("company").value = "";
    document.getElementById("location").value = "";
  } else {
    alert("Please fill all fields");
  }
}

// Apply button
function applyInternship(role) {
  alert("Applied for " + role);
}

// Search functionality
document.getElementById("search").addEventListener("input", function(e) {
  const value = e.target.value.toLowerCase();

  const filtered = internships.filter(item =>
    item.role.toLowerCase().includes(value)
  );

  displayInternships(filtered);
});

// Initial load
displayInternships(internships);