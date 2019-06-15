import React from "react"

export default function AllCountries(props) {
  let { countries } = props;
  return countries.map(country =>
    <tr key={country.name}>
      <td>{country.name}</td>
      <td>{country.capital}</td>
      <td>{country.region}</td>
      <td>{country.population}</td>
      <td>{country.area}</td>
      <td>{removeMultiValues(country.timezones)}</td>
      <td>{removeMultiValues(country.borders)}</td>
      <td>{country.topLevelDomain}</td>
      <td>{removeMultiValues(country.currencies)}</td>
      <td>{removeMultiValues(country.languages)}</td>
    </tr>
  );
}

function removeMultiValues(prop) {
  const size = prop.length;
  if (size > 1) {
    return prop[0] + " +" + (size - 1);
  }
  return prop[0];
}

