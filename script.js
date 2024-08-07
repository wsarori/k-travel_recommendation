

function Search_it() {
  fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
      // Store the data for easy access (avoid global variables)
      const travelData = data;
      
      const searchTerm = document.getElementById('edit_d695c69').value.toLowerCase();
      let results = []; // Array to store search results

      // Search logic for countries, cities, temples, beaches
      if (searchTerm === 'countries' || searchTerm === 'country') {
        results = travelData.countries;
      } else if (searchTerm === 'temples' || searchTerm === 'temple') {
        results = travelData.temples;
      } else if (searchTerm === 'beaches' || searchTerm === 'beach') {
        results = travelData.beaches;
      } else if (searchTerm === 'cities') { // Add search for cities
        // Loop through countries and add matching cities
        results = travelData.countries.flatMap(country => country.cities);
      } else {
        // Handle no match case (optional: display message)
      }

      // Update container content (clear previous results)
      container_4e8ed092_padding.innerHTML = '';

      // Display search results (modify based on your needs)
      if (results.length > 0) {
        results.forEach(result => {
          container_4e8ed092_padding.innerHTML += `
            <h3>${result.name}</h3>
            <img src="${result.imageUrl}" alt="${result.name}">
            <p>${result.description}</p>
          `;
        });
      } else {
        container_4e8ed092_padding.innerHTML = 'No results found.'; // Example message
      }
    });
}
