import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { api } from "./utils/api";

import SearchInput from "./components/SearchInput";
import { API_ENDPOINT } from "./constants/constants";
function App() {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const fetchQuery = async (value: string) => {
    try {
      const res = await fetch(`${API_ENDPOINT}?query=${value}`, {
        method: 'GET'
      });

      // const res = await api.get(`?query=${value}`);
      // console.log(res);

      const data = await res.json();
      return data;
    } catch (error) {
      console.error('error', error);
    }

  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const handleSearch = async () => {
      if (searchInput.length > 3) {
        const data = await fetchQuery(searchInput);

        // @todo show error state if array is empty
        if (data) {
          setResults(data);
        }
      };
    };

    handleSearch();

  }, [searchInput]);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Materia Auto Complete</h1>
        <SearchInput
          label='Keyword Search'
          onChange={onChange}
        />
        {results}
      </div>
    </>
  )
}

export default App
