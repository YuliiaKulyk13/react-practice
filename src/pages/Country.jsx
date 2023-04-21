import { Section, Container, CountryInfo, Loader } from 'components';
import { useState, useEffect } from 'react';
import { fetchCountry } from '../service/country-service';
import { useParams, Link } from 'react-router-dom';

export const Country = () => {
  const [country, setCountry] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const { countryId } = useParams();
  console.log(country);

  useEffect(() => {
    const renderCountryList = async () => {
      setLoader(true);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    renderCountryList();
  }, [countryId]);

  const { flag, capital, countryName, id, languages, population } = country;
  return (
    <Section>
      <Container>
        {loader && <Loader />}
        {error && <h2>Sorry there is no information!</h2>}
        <CountryInfo
          flag={flag}
          capital={capital}
          country={countryName}
          id={id}
          languages={languages}
          population={population}
        />
        <Link to="/">
          <button type="button">Back</button>
        </Link>
      </Container>
    </Section>
  );
};
