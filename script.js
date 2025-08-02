// Example property data (replace with backend fetch for real listings)
const exampleProperties = [
  {
    title: "3 Bed Semi-Detached, Aldershot",
    price: 350000,
    type: "For Sale",
    location: "Aldershot",
    description: "Modern family home close to local schools and amenities.",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "2 Bed Flat, Aldershot",
    price: 250000,
    type: "For Sale",
    location: "Aldershot",
    description: "Modern flat in the heart of Aldershot.",
    image: "https://via.placeholder.com/300x200"
  }
];

// Display properties
function loadProperties() {
  const list = document.getElementById('property-list');
  list.innerHTML = '';
  exampleProperties.forEach(p => {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.innerHTML = `
      <img src="${p.image}" alt="Property Image">
      <h3>${p.title}</h3>
      <p>£${p.price.toLocaleString()} | ${p.type}</p>
      <p>${p.description}</p>
      <button onclick="openViewingForm('${p.title}')">Book a Viewing</button>
    `;
    list.appendChild(card);
  });
}
window.onload = loadProperties;

// Mortgage Calculator
document.getElementById('mortgage-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const amount = parseFloat(document.getElementById('amount').value);
  const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
  const years = parseInt(document.getElementById('years').value);
  const n = years * 12;
  const monthly = (amount * interest) / (1 - Math.pow(1 + interest, -n));
  document.getElementById('mortgage-result').innerText =
    isFinite(monthly)
      ? `Estimated Monthly Payment: £${monthly.toFixed(2)}`
      : 'Please enter valid numbers.';
});

// Viewing Modal
function openViewingForm(propertyName) {
  document.getElementById('viewing-modal').style.display = 'flex';
  document.getElementById('property-name').value = propertyName;
}
function closeViewingForm() {
  document.getElementById('viewing-modal').style.display = 'none';
}
document.getElementById('viewing-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your viewing request has been sent!');
  closeViewingForm();
});

// Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
});
