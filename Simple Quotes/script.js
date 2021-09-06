const quoteEl = document.getElementById('quote')
const jokeBtn = document.getElementById('quoteBtn')
const author = document.getElementById('author')

jokeBtn.addEventListener('click', generateQuote)

generateQuote()

// USING ASYNC AWAIT
async function generateQuote() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://api.quotable.io/random', config)

    const data = await res.json()

    quoteEl.innerHTML = data.content
    author.innerHTML = data.author
}

// USING .then()
// function generateQuote() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch('https://api.quotable.io/random', config)
//         .then((res) => res.json())
//         .then((data) => {
//             quoteEl.innerHTML = data.content
//              author.innerHTML = data.author  
//         })
// }
