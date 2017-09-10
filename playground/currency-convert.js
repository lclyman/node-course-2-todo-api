const axios = require('axios');

// const getExchangeRate = (from, to) => {
//   return axios.get(`http://api.fixer.io/latest?base=${from}`).then((response) => {
//     return response.data.rates[to];
//   });
// };

const getExchangeRate = async (from, to) => {
  try {
    const response = await axios.get(`http://api.fixer.io/latest?base=${from}`);
    const rate = response.data.rates[to];

    if (rate) {
      return rate;
    } else {
      throw new Error()
    }

  } catch (err) {
    throw new Error(`Unable to get exchange rates for ${from} and ${to}!`);
  };
};

// const getCountries = (curCode) => {
//   return axios.get(`https://restcountries.eu/rest/v2/currency/${curCode}`).then((response) => {
//     return response.data.map((country) => country.name);
//   });
// };

const getCountries = async(curCode) => {
  try{
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${curCode}`);
    return response.data.map((country) => country.name);
  }catch (err) {
    throw new Error(`Unable to get countries that use ${curCode}.`);
  }
};

const convertCurrency = (from, to, amount) => {
  let countries;
  return getCountries(to).then((tempCountries) => {
    countries = tempCountries;
    return getExchangeRate(from, to);
  }).then((rate) => {
    const exchangedAmount = amount * rate;

    return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
  });
};

const convertCurrencyAlt = async (from, to, amount) => {
  const countries = await getCountries(to);
  const rate = await getExchangeRate(from, to);

  const exchangedAmount = amount * rate;
  return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
};

convertCurrencyAlt('USD', 'EUR', 100).then((status) => {
  console.log(status);
}).catch((err) => {
  console.log(err.message);
});