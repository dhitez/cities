document.addEventListener('DOMContentLoaded', function() {
    let cities = [];
    let output = document.getElementById('output');

    function isValidCity(city) {
        if (cities.length === 0) return true;
        let lastCity = cities[cities.length - 1];
        return city[0].toLowerCase() === lastCity[lastCity.length - 1].toLowerCase();
    }

    function isCityUnique(city) {
        return !cities.includes(city.toLowerCase());
    }

    function addCity(city) {
        cities.push(city.toLowerCase());
    }

    function displayCities() {
        output.innerHTML = cities.join(', ');
    }

    document.getElementById('submit').addEventListener('click', function() {
        let cityInput = document.getElementById('cityInput');
        let city = cityInput.value.trim();
        
        if (isValidCity(city) && isCityUnique(city)) {
            addCity(city);
            displayCities();
            cityInput.value = '';
        } else {
            alert('Неверный город. Попробуйте снова.');
        }
    });
});
