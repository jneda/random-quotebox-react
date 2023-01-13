export default function QuoteButton(props) {
  console.log(props);
  return (
    <>
      <button id="new-quote" onClick={props.test}>
        Nouvelle citation
      </button>
    </>
  );
}
