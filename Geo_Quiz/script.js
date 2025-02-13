// Références

const imagePosted = document.getElementById('imagePosted');

const questionIndicator = document.getElementById('questionIndicator');
const scoreIndicator = document.getElementById('scoreIndicator');
const tryIndicator = document.getElementById('tryIndicator');

const inputAnswer = document.getElementById('inputAnswer');
const submitButton = document.getElementById('submitButton');
const answerIndicator = document.getElementById('answerIndicator');

const retrySection = document.getElementById('retrySection');

const hint = document.getElementById('hint');
const buttonsOfHints = document.getElementById('buttonsOfHints');
const hintText = document.getElementById('hintText');

const partyInterface = document.querySelectorAll('.partyInterface');


// Liste des pays à trouver
let countries = [
    {
        name: 'Chine',
        img: 'https://images.unsplash.com/photo-1558981012-236ee58eb5c9?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        hint: {
            continent: 'Asie',
            numberOfColorOnTheFlag: 2
        },
    },
    {
        name: 'Cambodge',
        img: 'https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Asie',
            numberOfColorOnTheFlag: 3
        },
    },
    {
        name: 'Grèce',
        img: 'https://images.pexels.com/photos/951539/pexels-photo-951539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Europe',
            numberOfColorOnTheFlag: 2
        },
    },
    {
        name: 'Angleterre',
        img: 'https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Europe',
            numberOfColorOnTheFlag: 3
        },
    },
    {
        name: 'France',
        img: 'https://images.pexels.com/photos/6332825/pexels-photo-6332825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Europe',
            numberOfColorOnTheFlag: 3
        },
    },
    {
        name: 'Viêtnam',
        img: 'https://images.pexels.com/photos/58597/pexels-photo-58597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Asie',
            numberOfColorOnTheFlag: 2
        },
    },
    {
        name: 'Russie',
        img: 'https://images.pexels.com/photos/3629813/pexels-photo-3629813.jpeg',
        hint: {
            continent: 'Europe/Asie',
            numberOfColorOnTheFlag: 3
        },
    },
    {
        name: 'États-Unis',
        img: 'https://images.pexels.com/photos/154140/pexels-photo-154140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Amérique',
            numberOfColorOnTheFlag: 3
        },
    },
    {
        name: 'Brésil',
        img: 'https://images.pexels.com/photos/27914780/pexels-photo-27914780/free-photo-of-art-monument-nuages-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Amérique',
            numberOfColorOnTheFlag: 3
        },
    },
    {
        name: 'Canada',
        img: 'https://images.pexels.com/photos/1374585/pexels-photo-1374585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Amérique',
            numberOfColorOnTheFlag: 2
        },
    },
    {
        name: 'Corée du Sud',
        img: 'https://images.pexels.com/photos/13716545/pexels-photo-13716545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Asie',
            numberOfColorOnTheFlag: 4
        },
    },
    {
        name: 'Australie',
        img: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Océanie',
            numberOfColorOnTheFlag: 3
        },
    },
    {
        name: 'Émirats Arabes Unis',
        img: 'https://images.pexels.com/photos/10593605/pexels-photo-10593605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Asie',
            numberOfColorOnTheFlag: 4
        },
    },
    {
        name: 'Suisse',
        img: 'https://images.pexels.com/photos/17190957/pexels-photo-17190957/free-photo-of-ville-monument-lac-voyager.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Europe',
            numberOfColorOnTheFlag: 2
        },
    },
    {
        name: 'Pérou',
        img: 'https://images.pexels.com/photos/1570610/pexels-photo-1570610.jpeg',
        hint: {
            continent: 'Amérique',
            numberOfColorOnTheFlag: 2
        },
    },
    {
        name: 'Inde',
        img: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Asie',
            numberOfColorOnTheFlag: 3
        },
    },
    {
        name: 'Éthiopie',
        img: 'https://i.la-croix.com/1400x933/smart/2018/02/18/1200914655/volcan-Dallol-entre-eruption1926_0.jpg',
        hint: {
            continent: 'Afrique',
            numberOfColorOnTheFlag: 4
        },
    },
    {
        name: 'Namibie',
        img: 'https://images.pexels.com/photos/248796/pexels-photo-248796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Afrique',
            numberOfColorOnTheFlag: 5
        },
    },
    {
        name: 'Sri Lanka',
        img: 'https://images.pexels.com/photos/6045035/pexels-photo-6045035.jpeg',
        hint: {
            continent: 'Asie',
            numberOfColorOnTheFlag: 4
        },
    },
    {
        name: 'Philippines',
        img: 'https://images.pexels.com/photos/2346015/pexels-photo-2346015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        hint: {
            continent: 'Asie',
            numberOfColorOnTheFlag: 4
        },
    }
];


// Set informations
let questionNumber;
let scoreNumber;
let tryNumber;
let questionswon;
let hintUsed;
let countriesIncrement;


// Lancer la partie au chargement de la page
party();


// Ecouteurs d'évènements

// Valider la réponse
document.getElementById('answerForm').addEventListener('submit', function(event){
    event.preventDefault();
    answer();

    // Réinitialiser l'input
    inputAnswer.value='';
});

// Si l'input est vide, impossibilité de soumettre le formulaire
inputAnswer.addEventListener('input', ()=>{
    if (inputAnswer.value==''){
        submitButton.disabled=true;
    } else {
        submitButton.disabled=false;
    }
});

// Les boutons recommencer relance une partie
document.querySelectorAll('.retry').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        party();
    })
});

// Afficher cacher l'écran indice
document.getElementById('hintButton').addEventListener('click', ()=>{
    hint.classList.toggle('none');
});

buttonsOfHints.childNodes.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        if (btn.parentNode.firstElementChild==btn){
            hintText.innerText=countries[countriesIncrement].hint.continent;
        } else {
            hintText.innerText=countries[countriesIncrement].hint.numberOfColorOnTheFlag;
        }
        buttonsOfHints.classList.add('none');
        hintUsed=true;
    })
    
});


// Fonctions

// Remettre à 0 l'interface
function initialization(){
    // Réinitialiser l'affichage de l'interface utilisateur
    retrySection.classList.add('none');

    document.querySelectorAll('.form').forEach(element=>{
        element.classList.remove('none');
    })

    hint.classList.add('none');
    buttonsOfHints.classList.remove('none');

    partyInterface.forEach(element=>{
        element.classList.remove('none');
    })

    // Réinitialiser l'indice
    hintUsed=false;
    hintText.innerText='';

    submitButton.disabled=true;

    // Réinitialisation du nombre d'essai
    tryNumber=5;
    tryIndicator.innerText=tryNumber;
}

// Fonction pour lancer une partie
function party(){

    initialization();

    answerIndicator.innerText='';
    questionNumber = 1;
    scoreNumber = 0;
    questionswon = 0;
    countriesIncrement = 0;

    questionIndicator.innerText=`${questionNumber}/${countries.length}`;
    scoreIndicator.innerText=`${scoreNumber} points`;

    // Mélange le tableau
    countries.sort(() => Math.random() - 0.5);

    // Afficher la première image
    imagePosted.src=countries[countriesIncrement].img;
}

function answer(){
    if (inputAnswer.value.toLowerCase()==countries[countriesIncrement].name.toLowerCase()){
        scoreUp();
        nextQuestion();
    } else {
        if (tryNumber>1){
            // Enlever un essai
            tryNumber--;
            tryIndicator.innerText=tryNumber;
            answerIndicator.style.color='red';
            answerIndicator.innerText='Mauvaise réponse !';

        } 
        else {
            // Afficher la réponse pendant 2,5s
            answerIndicator.style.color='aqua';
            
            answerIndicator.innerText=`C'était ${countries[countriesIncrement].name}`;

            // Question suivante
            nextQuestion();
        }
    }
}

// Fonction passage à la prochaine question
function nextQuestion(){

    // Cacher au bout de 2s la réponse
    setTimeout(() => {
        answerIndicator.innerText='';
    }, 2000);
    
    initialization();

    if (countriesIncrement<countries.length-1){
        // Mis à jour de l'indicateur de question
        questionNumber++;
        questionIndicator.innerText=`${questionNumber}/${countries.length}`;
        countriesIncrement++;
        imagePosted.src=countries[countriesIncrement].img;
    } else {
        partyFinish();
    }
    
}

function scoreUp(){
    answerIndicator.style.color='lime';
    answerIndicator.innerText='Bonne réponse !';

    questionswon++;
    
    if (hintUsed){
        scoreNumber=scoreNumber+5;
    } else {
        scoreNumber=scoreNumber+10;
    }
    
    scoreIndicator.innerText=`${scoreNumber} points`;
}

// Finir la partie
function partyFinish(){
    // Fin de la partie : cacher le formulaire
    document.querySelectorAll('.form').forEach(element=>{
        element.classList.add('none');
    });

    // Mettre le score total
    document.getElementById('totalScore').innerText=`${scoreNumber} points sur ${countries.length*10}`;

    // Mettre le nombre total de pays trouvés
    document.getElementById('totalCountries').innerText=`${questionswon} sur ${countries.length}`;

    // Afficher qlq temps après l'écran pour recommencer
    setTimeout(() => {
        partyInterface.forEach(element=>{
            element.classList.add('none');
        })
        retrySection.classList.remove('none');

    }, 2000);
}