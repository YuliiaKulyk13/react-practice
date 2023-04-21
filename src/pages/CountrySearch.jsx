import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from '../service/country-service';

export const CountrySearch = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }
    const renderCountryList = async () => {
      setLoader(true);
      try {
        const data = await fetchByRegion(query);
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    renderCountryList();
  }, [query]);

  const handleSubmit = data => {
    setQuery(data);
  };
  console.log(countries);
  return (
    <Section>
      <Container>
        <SearchForm handleSubmit={handleSubmit} />
        {<CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
