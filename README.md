# Random Quote Generator
This is a simple web application that generates a random quote every time the user clicks on the "Generate Quote" button. The application uses the Forismatic API to retrieve a random quote in JSON format and displays it on the page using JavaScript.

## Link

https://armansoor.github.io/quotegenerator/

## Technologies Used
1. HTML
2. CSS
3. JavaScript

## APIs Used
The application uses the Forismatic API to retrieve random quotes in JSON format. The API does not require an API key, and returns a JSON response that includes the quote text and author information.

## How to Use
To use the application, simply open the index.html file in your web browser. Click on the "Generate Quote" button to generate a new random quote.

## Code Overview
1. The HTML file index.html defines the structure of the web page, including a container div for the quote generator and a button to generate new quotes.

2. The CSS file style.css defines the styling for the web page, including the fonts, colors, and layout of the quote generator.

3. The JavaScript file script.js defines the generateQuote function that makes an HTTP request to the Forismatic API, retrieves a random quote in JSON format, and displays it on the page. The function uses the fetch function to make an HTTP request to the API endpoint, and then extracts the quote text and author information from the JSON response using JavaScript. The generated quote is displayed on the page using the innerHTML property of the quote element.

## Conclusion
The random quote generator is a simple web application that demonstrates how to retrieve data from an API and display it on a web page using JavaScript. By using APIs, web developers can easily access a wide range of data sources to add dynamic content to their web applications.
