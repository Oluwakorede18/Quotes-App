import { MY_API_KEY } from "./config";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '494a1a1718msha4b89732fef1a6bp1d7da2jsnbe72600036f2',
		'X-RapidAPI-Host': MY_API_KEY
	}
};

const preloader = document.getElementById('loader')
const author = document.getElementById('author')
const quote =   document.getElementById('quote')
const text =  document.getElementById('intro-text')

function showPreloader(){
	preloader.classList.add("show")
	quote.classList.add("hide")
	author.classList.add("hide")	
	text.classList.add("hide")
	// quote.classList.remove("error")

}

function hidePreloader(){
	preloader.classList.remove("show")
	quote.classList.remove("hide")
	author.classList.remove("hide")

}

function clearQuote(){
	document.getElementById('quoteContainer').innerHTML= "";
}

// clearQuote()
function getQuote(){

	showPreloader()
fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
		hidePreloader()
			quote.classList.remove("error")
			quote.innerHTML = response.content;
			author.innerHTML = '- ' + response.originator.name + ' -';
        
    })


	.catch(err => {
		console.error(err)
		quote.innerHTML = "Something went wrong. Please try again.";
		author.innerHTML = "";
		quote.classList.add("error")
	
	});

}




