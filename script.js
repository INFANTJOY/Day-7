// Function to fetch data from the API
async function fetchData() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Task 1: Get all the countries from Asia continent/region using Filter function
  // Task 2: Get all the countries with a population of less than 2 lakhs using Filter function
  // Task 3: Print the details (name, capital, flag) using forEach function
  // Task 4: Print the total population of countries using reduce function
  // Task 5: Print the country that uses US dollars as currency
  
  fetchData().then((countries) => {
    // Task 1
    const asiaCountries = countries.filter((country) => country.region === 'Asia');
    console.log('Asia Countries:', asiaCountries);
  
    // Task 2
    const countriesWithLowPopulation = countries.filter((country) => {
      const population = country.population;
      return population && population < 200000; // Assuming "lakhs" means 100,000
    });
    console.log('Countries with population less than 2 lakhs:', countriesWithLowPopulation);
  
    // Task 3
    countries.forEach((country) => {
      const { name, capital, flags } = country;
      console.log(`Name: ${name.common}, Capital: ${capital}, Flag: ${flags.png}`);
    });
  
    // Task 4
    const totalPopulation = countries.reduce((acc, country) => {
      const population = country.population;
      return acc + (population ? population : 0);
    }, 0);
    console.log('Total Population:', totalPopulation);
  
    // Task 5
    const usDollarCountries = countries.filter((country) => {
      const currencies = country.currencies;
      return currencies && currencies.USD;
    });
    console.log('Countries using US dollars:', usDollarCountries);
  });