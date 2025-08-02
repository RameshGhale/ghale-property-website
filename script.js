// Example property data (replace with backend fetch for real listings)
const exampleProperties = [
  {
    title: "3 Bed Semi-Detached, Aldershot",
    price: 350000,
    type: "For Sale",
    location: "Aldershot",
    description: "Modern family home close to local schools and amenities.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "2 Bed Flat, Aldershot",
    price: 250000,
    type: "For Sale",
    location: "Aldershot",
    description: "Modern flat in the heart of Aldershot.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "4 Bed Detached, Farnborough",
    price: 525000,
    type: "For Sale",
    location: "Farnborough",
    description: "Spacious detached home with large garden.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80"
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
      <button onclick="alert('Booking for: ${p.title}')">Book a Viewing</button>
    `;
    list.appendChild(card);
  });
}
window.onload = loadProperties;

// Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
});
