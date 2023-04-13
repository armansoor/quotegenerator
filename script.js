async function generateQuote() {
  const url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(url);
    const data = await response.json();
    const quoteElement = document.getElementById("quote");
    quoteElement.innerHTML = `"${data.quoteText}" - ${data.quoteAuthor}`;
  } catch (error) {
    console.log("Error: ", error);
  }
}
