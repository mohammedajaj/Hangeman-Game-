const letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter=>{
    let span = document.createElement("span");

    let theLetter = document.createTextNode(letter);

    span.appendChild(theLetter);

    span.className = "letter-box";

    lettersContainer.appendChild(span);
})

const words = {
    programming:["php","javascript","go","scala","fortran","r","mysql","python"],
    movies:["prestige","Inception","Parasite","Whiplash","Memento","Coco","Up"],
    pepole:["Albert Einstein","Hitchcock","Alexander","Cleopatra","Mahatma Ghandi"],
    countries:["Syria","palestine","Yemen","Egypt","Qatar","Bahrain"],
}
let allKeys = Object.keys(words);

let randPropNum = Math.floor(Math.random() * allKeys.length);
let randPropName = allKeys[randPropNum];
let randPropValue = words[randPropName];


let randValue = Math.floor(Math.random() * randPropValue.length);
let randValueValue = randPropValue[randValue];

document.querySelector(".game-info .category span").innerHTML = randPropName;

let lettersGuessContan = document.querySelector(".letters-guess");

let lettersAndSpace = Array.from(randValueValue);

lettersAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");

    if(letter === " "){
        emptySpan.className = "with-space";
    }

    lettersGuessContan.appendChild(emptySpan);
});

let guessSpans = document.querySelectorAll(".letters-guess span");

let wrong = 0;
let count = 0;

let theDraw = document.querySelector(".hangman-draw");

document.addEventListener(("click"),(e) =>{
    let theStatus = false;

    if(e.target.className === "letter-box"){
        e.target.classList.add("clicked");

        let theClickedLetter = e.target.innerHTML.toLowerCase();

        let theChosenWord = Array.from(randValueValue.toLowerCase());

        

        theChosenWord.forEach((wordLetter,wordIndex) =>{
            if(theClickedLetter == wordLetter){
                theStatus = true;

                guessSpans.forEach((span,spanIndex) =>{
                    if(wordIndex === spanIndex){
                        span.innerHTML = wordLetter;
                        count++;
                        if(count === guessSpans.length){
                            winner();
                        };
                    };
                        
                    
                });
            };
        });
        if(theStatus !== true){
            wrong++;

            theDraw.classList.add(`wrong-${wrong}`);

            document.getElementById("fail").play();

            if(wrong === 8){
                endGame();
                lettersContainer.classList.add("finished");
            }

        }else{
            document.getElementById("success").play();
        }
    }
});


function endGame(){
    let div = document.createElement("div");

    let divText = document.createTextNode(`Game Over , The Word Is ${randValueValue}`);

    div.appendChild(divText);

    div.className = 'Popup';

    document.body.appendChild(div);
}

function winner(){
    let div = document.createElement("div");

    let divText = document.createTextNode(`The Winner , The Wrong Is = ${wrong}`);

    div.appendChild(divText);

    div.className = 'pop';

    document.body.appendChild(div);
}

let myBtn = document.getElementById("btn");

myBtn.onclick = function(){
    location.reload();
}