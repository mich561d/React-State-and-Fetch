const URLLabels = "http://localhost:3333/labels";
const URLCountries = "http://localhost:3333/countries";

class CountryFactory {

  getLabels = () => {
    return fetch(URLLabels).then(handleHttpErrors)
  }

  getCountries = () => {
    return fetch(URLCountries).then(handleHttpErrors)
  }
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

export default new CountryFactory();