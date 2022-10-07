reload.addEventListener('click', (reloadl) =>
{
          window.location.reload(true);
})

//toogle code😉
const body = document.querySelector("body");
const toogle = document.getElementById("toogle");
toogle.onclick = function (){
                    toogle.classList.toggle("active");
                    body.classList.toggle("active")
}

const resultEl = document.getElementById('inpu');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const numberEl = document.getElementById('number');
const generateEl = document.getElementById('generate');
const cloneEl = document.getElementById('bghy');
const gigo = document.getElementById('gitu');

cloneEl.addEventListener('click', () => {
          const textarea = document.createElement('textarea');
          const password = resultEl.innerText;

          if (!password) { return; alert("please Generate The Password First")}

          textarea.value = password;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          textarea.remove();
          alert("Password Copied To Clipboard!")
});

const randomFunc = {
          lower: getRandomLower,
          upper: getRandomUpper,
          number: getRandomNum,
          symbol: getRandomSym
}

generateEl.addEventListener('click', () => {
          const length = +lengthEl.value;
          const hasUpper = uppercaseEl.checked;
          const hasLower = lowercaseEl.checked;
          const hasNumber = numberEl.checked;
          const hassymbol = symbolsEl.checked;
resultEl.innerText = generatePassword(hasUpper, hasLower, hassymbol, hasNumber, length );
});

function generatePassword(upper, lower, symbol, number, length) {
          let generatedPassword = '';
          const typesCount = upper + lower + symbol+ number;
          const typesArr = [{upper}, {lower}, {symbol}, {number}].filter(item => Object.values(item)[0]);
          // console.log("Arrys: ",typesArr);
          if (typesCount === 0){
                    return '';
          } 
          cloneEl.classList.add("fa-bounce")
          for ( let i = 0; i < length; i += typesCount) {
                    typesArr.forEach(type => {
                              const funcName = Object.keys(type)[0];
                              generatedPassword += randomFunc[funcName]();
                              
                    });
          }
          console.log(generatedPassword.slice(0, length));
          const finalPassword = generatedPassword.slice(0, length);
          return finalPassword;
}



// Generater Code
function getRandomLower() {
         return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
          return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
 }
 function getRandomNum() {
          return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
 }
 function getRandomSym() {
          const symbols = "!@#$%^&*()"
          return symbols[Math.floor(Math.random() * symbols.length)]
 }

 const travel = document.getElementById("hitgub");

 travel.addEventListener('click', () => 
 window.location.href="https://github.com/aarav7s7c")
