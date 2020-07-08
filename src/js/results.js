const header = new Headers({
	'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
});

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats');

const ES = new EventSource(url, header);

const cats_bar = document.getElementById('cats_bar');
const dogs_bar = document.getElementById('dogs_bar');
const parots_bar = document.getElementById('parots_bar');
const total_bar = document.getElementById('total_bar');


ES.onmessage = message => {
	votesObj = JSON.parse(message.data);
	all = votesObj.cats + votesObj.dogs + votesObj.parrots;
	cats_per = votesObj.cats/all;
	dogs_per = votesObj.dogs/all;
	parrots_per = votesObj.parrots/all;

	cats_bar.style.cssText = `width: ${cats_per*100}%`;
	cats_bar.textContent = `${votesObj.cats}`;

	dogs_bar.style.cssText = `width: ${dogs_per*100}%`;
	dogs_bar.textContent = `${votesObj.dogs}`;

	parrots_bar.style.cssText = `width: ${parrots_per*100}%`;
	parrots_bar.textContent = `${votesObj.parrots}`;

	total_bar.style.cssText = `width: ${all}%`;
	total_bar.textContent = `${all}`;
};