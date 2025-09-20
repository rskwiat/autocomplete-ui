import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { fetchRequest } from "./utils/api";

import SearchInput from "./components/SearchInput";
import Results from "./components/Results";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const handleSearch = async () => {
      if (searchInput.length > 3) {
        const { data } = await fetchRequest(searchInput);

        if (data.length === 0) {
          setError('No related words found')
        }
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
      <ToastContainer
        hideProgressBar
      />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Materia Auto Complete</h1>
        <SearchInput
          label='Keyword Search'
          onChange={onChange}
        />
        <Results results={results} />
        {error}
      </div>
    </>
  )
}

export default App
