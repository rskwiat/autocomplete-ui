import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { ToastContainer } from "react-toastify";

import { fetchRequest } from "./utils/api";

import SearchInput from "./components/SearchInput";
import Results from "./components/Results";

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
        const { data, status } = await fetchRequest(searchInput);

        if (data.length === 0 && status === 200) {
          setError("No Results Found");
        }

        if (data.length > 0 && status === 200) {
          setError("");
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
        <h1 className="text-4xl font-bold mb-4 antialiased">
          Materia Auto Complete
        </h1>
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
