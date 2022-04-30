console.log('Project Mistery Letter!!!');

const btnCreateLetter = document.getElementById('criar-carta');
const generatedLetter = document.getElementById('carta-gerada');

function createLetter(event) {
  event.preventDefault();
  generatedLetter.innerText = '';

  const inputLetterText = document.getElementById('carta-texto');
  const textWords = inputLetterText.value.split(' ');

  const textLength = inputLetterText.value.trim().length;

  if (textLength === 0) {
    generatedLetter.innerText = 'Por favor, digite o conteúdo da carta.';
    return;
  }

  for (let index = 0; index < textWords.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = `${textWords[index]}`;
    generatedLetter.appendChild(span);
  }
}

btnCreateLetter.addEventListener('click', createLetter);
