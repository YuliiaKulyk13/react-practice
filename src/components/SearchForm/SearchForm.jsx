import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');
  const handleInput = evt => {
    setQuery(evt.target.value);
  };
  const handleFormSubmit = evt => {
    evt.preventDefault();
    handleSubmit(query);
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleFormSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select onChange={handleInput} aria-label="select" name="region" required>
        <option disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
