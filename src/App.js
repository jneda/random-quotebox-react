import QuoteBox from "./components/QuoteBox";
import "./styles.css";

export default function App() {
  /* ici la logique pour demander une nouvelle citation */
  return (
    <div className="App">
      <QuoteBox />
      <QuoteBox />
      <QuoteBox />
      <QuoteBox />
      <QuoteBox />
      <QuoteBox />
    </div>
  );
}
