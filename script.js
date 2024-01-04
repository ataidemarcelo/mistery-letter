console.log('Project Mistery Letter!!!');

const btnCreateLetter = document.getElementById('criar-carta');
const counterLetter = document.getElementById('carta-contador');
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

function chamgeClasses() {
  const words = generatedLetter.children;
  for (let index = 0; index < words.length; index += 1) {
    words[index].addEventListener('click', () => {
      console.log('clicou!!!!!');
      words[index].className = '';
      addClasses(words[index], arrayListOfClasses);
    });
  }
}

function createLetter(event) {
  event.preventDefault();
  generatedLetter.innerText = '';
  const inputLetterText = document.getElementById('carta-texto');
  const textWords = inputLetterText.value.split(' ');
  const textLength = inputLetterText.value.trim().length;
  counterLetter.innerText = textWords.length;

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
  chamgeClasses();
}

// const words = document.getElementsByClassName('');
// console.log(words);

btnCreateLetter.addEventListener('click', createLetter);
