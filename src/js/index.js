const header = new Headers({
	'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
});

let base_url = 'https://sf-pyw.mosyag.in/sse/vote';

const container = document.querySelector('.container');

const cats = document.querySelector('.cats');
const cat_pic_btn = document.querySelector('.cat-pic-btn');
const dogs = document.querySelector('.dogs');
const dog_pic_btn = document.querySelector('.dog-pic-btn');
const parrots = document.querySelector('.parrots');
const parrot_pic_btn = document.querySelector('.parrot-pic-btn');

const results = document.querySelector('.results');

const btns_voting = document.querySelector('.btns-voting');

const greetings = document.querySelector('.greetings');
const question = document.querySelector('.question');
const thanks = document.querySelector('.thanks');

const img_cat = document.querySelector('.img_cat');
const img_dog = document.querySelector('.img_dog');
const img_parrot = document.querySelector('.img_parrot');

const choice_cats = document.querySelector('.choice_cats');
const choice_dogs = document.querySelector('.choice_dogs');
const choice_parrots = document.querySelector('.choice_parrots');

function choose_cats() {
	container.style.marginBottom = '5%';

	btns_voting.style.display = 'none';

	greetings.style.display = 'none';
	thanks.style.display = 'inline-block';

	question.style.display = 'none';
	img_cat.style.display = 'inline-block';
	choice_cats.style.display = 'inline-block';

	results.style.display = 'inline-block';

	cat_pic_btn.style.display = 'none';
	dog_pic_btn.style.display = 'none';
	parrot_pic_btn.style.display = 'none';

};

function vote_Cats() {
	fetch('https://sf-pyw.mosyag.in/sse/vote/cats',
	{method: 'POST'}
		);
};

function choose_dogs() {
	btns_voting.style.display = 'none';

	container.style.marginBottom = '5%';

	greetings.style.display = 'none';
	thanks.style.display = 'inline-block';

	question.style.display = 'none';
	img_dog.style.display = 'inline-block';
	choice_dogs.style.display = 'inline-block';

	results.style.display = 'inline-block';

	cat_pic_btn.style.display = 'none';
	dog_pic_btn.style.display = 'none';
	parrot_pic_btn.style.display = 'none';
};

function vote_Dogs() {
	fetch('https://sf-pyw.mosyag.in/sse/vote/dogs',
	{method: 'POST'}
		);
};

function choose_parrots() {
	btns_voting.style.display = 'none';

	container.style.marginBottom = '5%';

	greetings.style.display = 'none';
	thanks.style.display = 'inline-block';

	question.style.display = 'none';
	img_parrot.style.display = 'inline-block';
	choice_parrots.style.display = 'inline-block';

	results.style.display = 'inline-block';

	cat_pic_btn.style.display = 'none';
	dog_pic_btn.style.display = 'none';
	parrot_pic_btn.style.display = 'none';
};

function vote_Parrots() {
	fetch('https://sf-pyw.mosyag.in/sse/vote/parrots',
	{method: 'POST'}
		);
};

cats.onclick = () => {
	choose_cats();
	vote_Cats();
};

cat_pic_btn.onclick = () => {
	choose_cats();
	vote_Cats();
};

dogs.onclick = () => {
	choose_dogs();
	vote_Dogs();
};

dog_pic_btn.onclick = () => {
	choose_dogs();
	vote_Dogs();
};

parrots.onclick = () => {
	choose_parrots();
	vote_Parrots();
};

parrot_pic_btn.onclick = () => {
	choose_parrots();
	vote_Parrots();
};

results.onclick = () => {
	window.location = 'results.html';
};