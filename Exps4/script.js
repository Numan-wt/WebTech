function showDetails(place) {

  document.getElementById("gallerySection").style.display = "none";
  document.getElementById("detailsSection").style.display = "block";

  

  if (place === "maldives") {
    document.getElementById("detailTitle").innerText = "Maldives";
    document.getElementById("detailText").innerText =
      "The Maldives is a tropical paradise located in the Indian Ocean. It is famous for crystal-clear turquoise water, white sandy beaches and luxury overwater villas. Tourists visit for snorkeling, scuba diving, coral reefs and peaceful relaxation. The Maldives is one of the top honeymoon destinations in the world because of its beautiful sunsets and private island resorts.";
  }

  if (place === "switzerland") {
    document.getElementById("detailTitle").innerText = "Switzerland";
    document.getElementById("detailText").innerText =
      "Switzerland is a beautiful European country known for the Alps mountains, scenic lakes and charming villages. It is popular for skiing, hiking and adventure sports. Swiss chocolate, cheese and watches are famous worldwide. The country is also known for its clean environment, peaceful lifestyle and breathtaking train journeys through snowy landscapes.";
  }

  if (place === "newyork") {
    document.getElementById("detailTitle").innerText = "New York, USA";
    document.getElementById("detailText").innerText =
      "New York City is one of the most exciting cities in the world. Known as 'The City That Never Sleeps', it is famous for Times Square, the Statue of Liberty, Central Park and Broadway shows. NYC is a global center for business, fashion, media and entertainment. Visitors enjoy shopping, diverse food cultures and iconic skyscrapers like the Empire State Building.";
  }

  if (place === "dubai") {
    document.getElementById("detailTitle").innerText = "Dubai, UAE";
    document.getElementById("detailText").innerText =
      "Dubai is a modern city in the United Arab Emirates known for luxury lifestyle and futuristic architecture. It is home to the Burj Khalifa, the tallest building in the world. Visitors enjoy desert safaris, luxury shopping malls, artificial islands and world-class hotels. Dubai combines traditional Arabian culture with modern innovation and tourism.";
  }
}

function goBack() {
  document.getElementById("gallerySection").style.display = "block";
  document.getElementById("detailsSection").style.display = "none";
}
