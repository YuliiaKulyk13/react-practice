import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countryList, setCountryList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const renderCountryList = async () => {
      setLoader(true);
      try {
        const data = await getCountries();
        setCountryList(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    renderCountryList();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countryList} />
        {loader && <Loader />}
        {error && (
          <Heading>
            Sorry there are no countries by your request! Please try again!{' '}
          </Heading>
        )}
      </Container>
    </Section>
  );
};
