function Search_it() {

    // Define travelData object (recommended method)
    const travelData = {
        "countries": [
          {
            "id": 1,
            "name": "Australia",
            "cities": [
              {
                "name": "Sydney, Australia",
                "imageUrl": "rc_images/Sydney.jpg",
                "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
              },
              {
                "name": "Melbourne, Australia",
                "imageUrl": "rc_images/Melbourne.jpg",
                "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
              }
            ]
          },
          {
            "id": 2,
            "name": "Japan",
            "cities": [
              {
                "name": "Tokyo, Japan",
                "imageUrl": "rc_images/Tokyo.jpg",
                "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
              },
              {
                "name": "Kyoto, Japan",
                "imageUrl": "rc_images/Kyoto.jpg",
                "description": "Known for its historic temples, gardens, and traditional tea houses."
              }
            ]
          },
          {
            "id": 3,
            "name": "Brazil",
            "cities": [
              {
                "name": "Rio de Janeiro, Brazil",
                "imageUrl":  "rc_images/Rio.jpg",
                "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
              },
              {
                "name": "São Paulo, Brazil",
                "imageUrl": "rc_images/Sao.jpg",
                "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
              }
            ]
          }
        ],
        "temples": [
          {
            "id": 1,
            "name": "Angkor Wat, Cambodia",
            "imageUrl": "rc_images/Angkor.jpg",
            "description": "A UNESCO World Heritage site and the largest religious monument in the world."
          },
          {
            "id": 2,
            "name": "Taj Mahal, India",
            "imageUrl": "rc_images/Taj.jpg",
            "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
          }
        ],
        "beaches": [
          {
            "id": 1,
            "name": "Bora Bora, French Polynesia",
            "imageUrl": "https://www.wendyperrin.com/wp-content/uploads/2020/11/Bora-Bora-French-Polynesia-dock-and-bungalow-shutterstock_361041146.jpg",
            "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
          },
          {
            "id": 2,
            "name": "Copacabana Beach, Brazil",
            "imageUrl": "https://www.travoh.com/wp-content/uploads/2016/09/01-Copacabana-Beach-Exploring-10-of-the-Top-Beaches-in-Rio-de-Janeiro-Brazil.jpg",
            "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
          }
        ]
      };

     // const travelData=Data.json();
  
   const searchTerm = document.getElementById('edit_295c03a').value.toLowerCase();
    let results = []; // Array to store search results
   // const searchTerm = 'beach';
  
    // Search logic for countries, cities, temples, beaches
    if (searchTerm === 'countries' || searchTerm === 'country') {
        results = travelData.countries.flatMap(country => country.cities);
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

          <div id="container_6d96ce93">
  <div style="background-color: darkgray;" id="container_6d96ce93_padding" >
    <div class="textstyle1">
      <img src="${result.imageUrl}" width="460" height="231" id="img_7bffc7b" alt="" title="" />
<h1 id="heading_60d9eae3" style="color: black;" >${result.name}</h1>      </div>
    <div class="textstyle2">
<h3 id="heading_434a387f" style="color: black;">${result.description}</h3>      </div>
    <div style="clear:both"></div>
    </div>
  </div>
  <br>

        `;
      });
    } else {
      container_4e8ed092_padding.innerHTML = 'No results found.'; // Example message
    }}
  
  
  
  