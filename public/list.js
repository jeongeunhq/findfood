

function showRestaurantsByCategory(category) {
    const koreanRestaurants = document.getElementById("korean-restaurants");
    const japaneseRestaurants = document.getElementById("japanese-restaurants");
    const meatRestaurants = document.getElementById("meat-restaurants");
    const pubRestaurants = document.getElementById("pub-restaurants");
    const cafeRestaurants = document.getElementById("cafe-restaurants");
  
    if (category === "korean") {
      koreanRestaurants.classList.remove("hidden");
      japaneseRestaurants.classList.add("hidden");
      meatRestaurants.classList.add("hidden");
      pubRestaurants.classList.add("hidden");
      cafeRestaurants.classList.add("hidden");
    } else if (category === "japanese") {
      koreanRestaurants.classList.add("hidden");
      japaneseRestaurants.classList.remove("hidden");
      meatRestaurants.classList.add("hidden");
      pubRestaurants.classList.add("hidden");
      cafeRestaurants.classList.add("hidden");
    } else if (category === "meat") {
        koreanRestaurants.classList.add("hidden");
        japaneseRestaurants.classList.add("hidden");
        meatRestaurants.classList.remove("hidden");
        pubRestaurants.classList.add("hidden");
        cafeRestaurants.classList.add("hidden");
      }
      else if (category === "pub") {
        koreanRestaurants.classList.add("hidden");
        japaneseRestaurants.classList.add("hidden");
        meatRestaurants.classList.add("hidden");
       pubRestaurants.classList.remove("hidden");
       cafeRestaurants.classList.add("hidden");
      }
      else if (category === "cafe") {
        koreanRestaurants.classList.add("hidden");
        japaneseRestaurants.classList.add("hidden");
        meatRestaurants.classList.add("hidden");
       pubRestaurants.classList.add("hidden");
       cafeRestaurants.classList.remove("hidden");
      }
  }