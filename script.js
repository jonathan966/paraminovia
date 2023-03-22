// Change the phrase
let phrase = document.querySelector('.phrase');
let phrases = [
	'Te amo Isabella',
	'Eres el sol de mi vida',
	'Eres mi todo',
	'Eres el amor de mi vida',
	'Mi corazon late por ti',
	'No puedo vivir sin ti'
];
let i = 0;

function changePhrase() {
	phrase.textContent = phrases[i];
	i++;
	if (i >= phrases.length) {
		i = 0;
	}
}

setInterval(changePhrase, 2000);



const audio = document.getElementById('my-audio');
const playButton = document.getElementById('play-audio');

playButton.addEventListener('click', function() {
  audio.play();
});
