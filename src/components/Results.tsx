import { toast } from "react-toastify";
interface ResultProps {
  results: string[]
}

export default function Results({ results }: ResultProps) {

  const copyToClipboard = (str: string) => {
    navigator.clipboard.writeText(str);
    toast(`${str} copied to the clipboard`, { toastId: str });
  }

  if (results.length === 0 || results === undefined) return;
  return (
    <div className="inline-block">
      {results.map((result, i) => {
        return (
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer"
            onClick={() => copyToClipboard(result)}
            key={`${result}_${i}`}
          >
            {result}
          </button>
        )
      })}
    </div>
  )
}