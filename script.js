console.log('Project Mistery Letter!!!');

const btnCreateLetter = document.getElementById('criar-carta');
const generatedLetter = document.getElementById('carta-gerada');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

const arrayListOfClasses = [style, size, rotate, skew];

function addClasses(item, arrayList) {
  const element = item;
  for (let index = 0; index < arrayList.length; index += 1) {
    const num = Math.floor(Math.random() * arrayList[index].length);
    element.classList.add(arrayList[index][num]);
  }
}

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
    addClasses(span, arrayListOfClasses);
    generatedLetter.appendChild(span);
  }
}

btnCreateLetter.addEventListener('click', createLetter);
