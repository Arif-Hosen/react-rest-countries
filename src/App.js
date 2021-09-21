import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">

      <Countries></Countries>

    </div>
  );
}















/* function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {

    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))

  }, [])
  return (
    <div>
      <h2>Traveling around the world!!!</h2>
      {
        countries.map(country => <Country name={country.name} capital={country.capital} flag={country.flag}></Country>)
      }
    </div>
  )
} */

/* function Country(props) {

  console.log(props);
  return (
    <div className='country-style'>
      <img style={{ width: '200px' }} src={props.flag} alt="" />
      <h3>Country: {props.name} </h3>
      <h4>Capital: {props.capital}</h4>
    </div>
  )
} */

export default App;
