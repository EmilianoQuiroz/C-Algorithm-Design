/**
 * @returns {Objet} quote information
 */
const fetchQuote = async() => {

    const res = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
    const data = await res.json();

    return data[0];
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element) => {

    console.log('nada');

    document.querySelector('#app-title').innerHTML = 'Breakingbad App'
    element.innerHTML = 'Loading...';

    //await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    // Listener del boton
    nextQuoteButton.addEventListener('click', async() =>{
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    })
    fetchQuote()
        .then(renderQuote);
}