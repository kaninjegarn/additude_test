// takes every country that exists in the 1.3 api version and make it more readable.
const whatCountry = (country) => {
  switch (country) {
    case 'au':
      return 'Australia'
    case 'br': 
      return 'Brazil'
    case 'ca':
      return 'Canada'
    case 'ch':
      return 'Switzerland'
    case 'de':
      return 'Germany'
    case 'dk':
      return 'Denmark'
    case 'es':
      return 'Spain'
    case 'fi':
      return 'Finland'
    case 'fr':
      return 'France'
    case 'gb':
      return 'United Kingdom'
    case 'ie':
      return 'IreLand'
    case 'ir':
      return 'Iran'
    case 'no':
      return 'Norway'
    case 'nl':
      return 'Netherlands'
    case 'nz':
      return 'New Zealand'
    case 'tr':
      return 'Turkey'
    case 'us':
      return 'United States'
    default:
      break;
  }
}

export default whatCountry;