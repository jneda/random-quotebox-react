import React, { useEffect, useState } from "react";

export default function QuoteBox() {
  /* ici la logique pour récupérer une nouvelle citation */
  const [quote, setQuote] = useState({
    text: "Coucou !",
    author: "Anthony Houlala"
  });

  useEffect(() => {
    getQuote();
  }, []); // bidouille pour émuler componentDidMount

  function getQuote() {
    // API_URL : https://api.quotable.io/random
    // kaamelott : https://kaamelott.chaudie.re/api/random

    // faire une requête AJAX

    /* const response = await fetch('https://api.quotable.io/random');
    console.log(response.json()); */
    /* 
    const response = await fetch("https://api.quotable.io/random");
    const quoteData = await response.json();
    setQuote({
      text: quoteData.content,
      author: quoteData.author
    });
 */
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((quoteData) =>
        setQuote({
          text: quoteData.content,
          author: quoteData.author
        })
      )
      .catch((error) => console.log(error));

    /* fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((responseBodyParsed) => console.log(responseBodyParsed))
    .catch((error) => console.log(error)); */
  }

  return (
    <div>
      <p id="text">{quote.text}</p>
      <p id="author">{quote.author}</p>
      <button id="new-quote" onClick={getQuote}>
        Nouvelle citation
      </button>
    </div>
  );
}

// fetch("https://mon-adresse-web.com")
// .then(response => response.json())
// .then(response => alert(JSON.stringify(response)))
// .catch(error => alert("Erreur : " + error));
