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
  return results.map((result, i) => {
    return (
      <button onClick={() => copyToClipboard(result)} key={`${result}_${i}`}>
        {result}
      </button>
    )
  })
}