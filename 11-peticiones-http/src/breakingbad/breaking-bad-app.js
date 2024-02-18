/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = (element) => {

    console.log(element)

    document.querySelector('#app-title').innerHTML = 'Breakingbad App'
    element.innerHTML = 'Loading...'
}