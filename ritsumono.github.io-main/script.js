const startButton=document.getElementById('start-btn')
const nextButton=document.getElementById('next-btn')
const questionContainerElement=document.getElementById('question-container')
const qustionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById('answer-buttons')
const restartButton=document.getElementById('restart-btn')
const playButton=document.getElementById('play-btn')
const content=document.getElementById('content')
const game=document.getElementById('game-content')

let shuffledQuestions, currentQuestionIndex

playButton.addEventListener('click',gameShowed)
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    game.classList.add('hidden')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    qustionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button=document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    restartButton.classList.add('hide')
    nextButton.classList.add('hide')
    playButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText='Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        restartButton.classList.remove('hide')
    } else {
        element.classList.add('wrong')
    }
}



function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions=[
    {
	question:  'What is the smallest planet in our solar system?',
	answers: [
            {text: 'Jupiter', correct: false,},
            {text: 'Mercury', correct: true},
            {text: 'Saturn', correct: false},
            {text: 'Mars', correct: false},
        ]
    },
    {
	question: 'Who painted the Mona Lisa?',
	answers:[ 
            {text: 'Pablo Picasso', correct: false },
            {text: 'Vincent van Gogh', correct: false },
            {text: 'Leonardo da Vinci', correct: true },
            {text: 'Michelangelo', correct: false },
        ]
    },
    {
	question: 'Which country is known as the “Land of the Rising Sun?”',
	answers:[ 
            {text: 'China', correct: false },
            {text: 'Japan', correct: true },
            {text: 'South Korea', correct: false },
            {text: 'Thailand', correct: false },
        ]
    },
    {
	question: 'Who painted the Mona Lisa?',
	answers:[ 
            {text: 'Pablo Picasso', correct: false },
            {text: 'Vincent van Gogh', correct: false },
            {text: 'Leonardo da Vinci', correct: true },
            {text: 'Michelangelo', correct: false },
        ]
    },
    {
	question: 'Which planet is known as the "Red Planet"?',
	answers:[ 
            {text: 'Earth', correct: false },
            {text: 'Mars', correct: true },
            {text: 'Jupiter', correct: false },
            {text: 'Venus', correct: false },
        ]
    },
    {
	question: 'Which country is famous for the Taj Mahal?',
	answers:[ 
            {text: 'India', correct: true },
            {text: 'China', correct: false },
            {text: 'Egypt', correct: false },
            {text: 'Brazil', correct: false },
        ] 
    },
    {
	question: 'Who wrote the play Romeo and Juliet?',
	answers:[ 
            {text: 'William Shakespeare', correct: true },
            {text: 'Charles Dickens', correct: false },
            {text: 'Jane Austen', correct: false },
            {text: 'Mark Twain', correct: false },
        ]
    },
    {
	question: 'What is the chemical symbol for Gold?',
	answers:[ 
            {text: 'Ag', correct: false },
            {text: 'Au', correct: true },
            {text: 'Fe', correct: false },
            {text: 'Hg', correct: false },
        ]  
    },
    {
	question: 'Which country is known for inventing pizza?',
	answers:[ 
            {text: 'Italy', correct: true },
            {text: 'Greece', correct: false },
            {text: 'Spain', correct: false },
            {text: 'France', correct: false },
        ]
    },
    {
	question: 'What is the capital city of Australia?',
	answers:[ 
            {text: 'Sydney', correct: false },
            {text: 'Melbourne', correct: false },
            {text: 'Canberra', correct: true },
            {text: 'Perth', correct: false },
        ]
    },
    {
	question: 'Who is the author of the Harry Potter book series?',
	answers:[ 
            {text: 'J.R.R. Tolkien', correct: false },
            {text: 'J.K. Rowling', correct: true },
            {text: 'George R.R. Martin', correct: false },
            {text: 'Stephen King', correct: false },
        ]
    },
    {
	question: 'What is the largest ocean in the world?',
	answers:[ 
            {text: 'Pacific Ocean', correct: true },
            {text: 'Atlantic Ocean', correct: false },
            {text: 'Indian Ocean', correct: false },
            {text: 'Arctic Ocean', correct: false },
        ]
    },
    {
	question: 'Who is credited with inventing the telephone?',
	answers:[ 
            {text: 'Alexander Graham Bell', correct: true },
            {text: 'Thomas Edison', correct: false },
            {text: 'Nikola Tesla', correct: false },
             {text: 'Benjamin Franklin', correct: false },
        ]
    },
    {
	question: 'What is the currency of Japan?',
	answers:[ 
            {text: 'Yen', correct: true },
            {text: 'Euro', correct: false },
            {text: 'Dollar', correct: false },
            {text: 'Pound', correct: false },
        ]
    },
    {
	question: 'Which animal is known as the "King of the Jungle"?',
	answers:[ 
            {text: 'Tiger', correct: false },
            {text: 'Elephant', correct: false },
            {text: 'Lion', correct: true },
            {text: 'Gorilla', correct: false },
        ]
    },
    {
	question: 'Who was the first person to step on the moon?',
	answers:[ 
            {text: 'Neil Armstrong', correct: true },
            {text: 'Buzz Aldrin', correct: false },
            {text: 'Yuri Gagarin', correct: false },
            {text: 'Alan Shepard', correct: false },
        ]
    },
    {
	question: 'Which country is famous for the Great Wall?',
	answers:[ 
            {text: 'China', correct: true },
            {text: 'India', correct: false },
            {text: 'Russia', correct: false },
            {text: 'United States', correct: false },
        ]
    },
    {
	question: 'Who painted the ceiling of the Sistine Chapel?',
	answers:[ 
            {text: 'Vincent van Gogh', correct: false },
            {text: 'Michelangelo', correct: true },
            {text: 'Leonardo da Vinci', correct: false },
            {text: 'Pablo Picasso', correct: false },
        ]
    },
    {  
	question: 'Which planet is known for having a ring system?',
	answers:[ 
            {text: 'Mars', correct: false },
            {text: 'Saturn', correct: true },
            {text: 'Uranus', correct: false },
            {text: 'Neptune', correct: false },
        ]
    },
    {
	question: 'Who is the author of the book "To Kill a Mockingbird"?',
	answers:[ 
            {text: 'Harper Lee', correct: true },
            {text: 'Ernest Hemingway', correct: false },
            {text: 'F. Scott Fitzgerald', correct: false },
            {text: 'George Washington', correct: false },
        ]
    },
    {
	question: 'Who is the Greek god of the sea?',
	answers:[ 
            {text: 'Zeus', correct: false },
            {text: 'Poseidon', correct: true },
            {text: 'Apollo', correct: false },
            {text: 'Hermes', correct: false },
        ]
    },
    {
	question: 'Which famous scientist developed the theory of relativity?',
	answers:[ 
            {text: 'Isaac Newton', correct: false },
            {text: 'Albert Einstein', correct: true },
            {text: 'Galileo Galilei', correct: false },
            {text: 'Marie Curie', correct: false },
        ]
    },
    {
	question: 'What is the largest organ in the human body?',
	answers:[ 
            {text: 'Liver', correct: false },
            {text: 'Brain', correct: false },
            {text: 'Skin', correct: true },
            {text: 'Heart', correct: false },
        ]
    },
    {
	question: 'Who painted the famous artwork "Starry Night"?',
	answers:[ 
            {text: 'Claude Monet', correct: false },
            {text: 'Pablo Picasso', correct: false },
            {text: 'Vincent van Gogh', correct: true },
            {text: 'Salvador Dalí', correct: false },
        ]
    },
    {
	question: 'In which city can you find the Eiffel Tower?',
	answers:[ 
            {text: 'Rome', correct: false },
            {text: 'Paris', correct: true },
            {text: 'London', correct: false },
            {text: 'New York City', correct: false },
        ]
    },
    {
	question: 'Which planet is known for its big red spot?',
	answers:[ 
            {text: 'Mercury', correct: false },
            {text: 'Venus', correct: false },
            {text: 'Jupiter', correct: true },
            {text: 'Saturn', correct: false },
        ]
    },
    {
	question: 'Which artist painted the famous artwork "The Last Supper"?',
	answers:[ 
            {text: 'Michelangelo', correct: false },
            {text: 'Leonardo da Vinci', correct: true },
            {text: 'Vincent van Gogh', correct: false },
            {text: 'Pablo Picasso', correct: false },
        ]
    },
    { 
    question: 'Who is the author of "Noli Me Tangere"?',
    answers:[
            {text: 'Jose Rizal', correct: true}, 
            {text: 'Andres Bonifacio', correct: false}, 
            {text: 'Marcelo H. Del Pilar', correct: false},
            {text: ' Graciano Lopez Jaena', correct: false},
        ]
     },
    {
    question: 'What is the English translation of "Noli Me Tangere"?',
    answers:[
            {text: 'Touch Me Not', correct: true},
            {text: 'Love Me Forever', correct: false},
            {text: 'Live Life Fully', correct: false},
            {text: 'Stand Strong', correct: false},
        ]
    },
    { 
    question: 'In what year was "Noli Me Tangere" published?',
    answers:[
            {text: '1886', correct: false},
            {text: '1892', correct: true},
            {text: '1896', correct: false},
            {text: '900', correct: false},
        ]
    },
    {
    question: 'Who is the protagonist of "Noli Me Tangere"?',
    answers:[
            {text: 'Crisostomo Ibarra', correct: true},
            {text: 'Elias', correct: false},
            {text: 'Padre Damaso', correct: false},
            {text: 'Maria Clara', correct: false},
        ]
    },
    {
    question: 'What is the name of the female protagonist in "Noli Me Tangere"?',
    answers:[
            {text: 'Maria Clara', correct: true},
            {text: 'Sisa', correct: false},
            {text: 'Tia Isabel', correct: false},
            {text: 'Juli', correct: false},
        ]
    },
    {
    question: 'What is the name of the church where the wedding of Maria Clara and Linares was supposed to take place?',
    answers:[
            {text: 'San Agustin Church', correct: false},
            {text: 'Manila Cathedral', correct: true},
            {text: 'Quiapo Church', correct: false},
            {text: 'Binondo Church', correct: false},
        ]
    },
    {
    question: 'Who is the father of Maria Clara in "Noli Me Tangere"?',
    answers:[
            {text: 'Padre Damaso', correct: true},
            {text: 'Padre Salvi', correct: false},
            {text: 'Padre Sibyla', correct: false},
            {text: 'Padre Fernandez', correct: false},
        ]
    },
    {
    question: 'What is the name of the boat that brought Elias to the Philippines?',
    answers:[
            {text: 'Santa Maria', correct: false},
            {text: 'San Antonio', correct: false},
            {text: 'San Francisco', correct: false},
            {text: 'San Juan', correct: true},
        ]
    },
    {
    question: 'Who is the character in "Noli Me Tangere" known for his love for gambling and womanizing?',
    answers:[
            {text: 'Padre Damaso', correct: false},
            {text: 'Padre Salvi', correct: true},
            {text: 'Linares', correct: false},
            {text: 'Ibarra', correct: false},
        ]
    },
    {
    question: 'What is the name of the sequel to "Noli Me Tangere"?',
    answers:[
            {text: 'El Filibusterismo', correct: true},
            {text: 'Makamisa', correct: false},
            {text: 'La Solidaridad', correct: false},
            {text: 'Mga Anak ng Bayan', correct: false},
        ]
    },
    {
    question: 'Who is considered the father of modern physics?',
    answers:[
            {text: 'Galileo Galilei', correct: false},
            {text: 'Isaac Newton', correct: false},
            {text: 'Albert Einstein', correct: true},
            {text: 'Johannes Kepler', correct: false},
        ]
    },
    {
    question: 'What was the name of the ancient Persian king who led an invasion of Greece in 480 ',
    answers:[
            {text: 'Darius III', correct: true},
            {text: 'Cyrus the Great', correct: false},
            {text: 'Xerxes I', correct: false},
            {text: 'Artaxerxes I', correct: false},
        ]
    },
    {
    question: 'Who was the first president of the United States of America?',
    answers:[
            {text: 'Thomas Jefferson', correct: false},
            {text: 'George Washington', correct: true},
            {text: 'John Adams', correct: false},
            {text: 'Benjamin Franklin', correct: false},
        ]
    },
    {
    question: 'What was the name of the first civilization that emerged in ancient Greece?',
    answers:[
            {text: 'Minoan', correct: true},
            {text: 'Mycenaean', correct: false},
            {text: 'Spartan', correct: false},
            {text: 'Athenian', correct: false},
        ]
    },
    {
    question: 'Who was the leader of the Soviet Union during World War II?',
    answers:[
            {text: 'Vladimir Lenin', correct: false},
            {text: 'Joseph Stalin', correct: true},
            {text: 'Nikita Khrushchev', correct: false},
            {text: 'Leon Trotsky', correct: false},
        ]
    },
    {
    question: 'In what year did the Black Death begin to spread throughout Europe?',
    answers:[
            {text: '1347', correct: true},
            {text: '1453', correct: false},
            {text: '1492', correct: false},
            {text: '1564', correct: false},
        ]
    },
    {
    question: 'What was the name of the document signed by the Pilgrims before they landed in Plymouth in 1620?',
    answers:[
            {text: 'Declaration of Independence', correct: false},
            {text: 'Magna Carta', correct: false},
            {text: 'Mayflower Compact', correct: true},
            {text: ' Articles of Confederation', correct: false},
        ]
    },
    {
    question: 'Who was the last queen of France before the French Revolution?',
    answers:[
            {text: 'Marie Antoinette', correct: true},
            {text: 'Catherine de Medici', correct: false},
            {text: 'Anne Boleyn', correct: false},
            {text: 'Elizabeth I', correct: false},
        ]
    },
    {
    question: 'Who was the emperor of Japan during World War II?',
    answers:[
            {text: 'Hirohito', correct: true},
            {text: 'Akihito Medici', correct: false},
            {text: 'Naruhito', correct: false},
            {text: 'Meiji', correct: false},
        ]
    },
    {
    question: 'Who was the first person to circumnavigate the world?',
    answers:[
            {text: 'Vasco da Gama', correct: false},
            {text: 'Christopher Columbus', correct: false},
            {text: 'Ferdinand Magellan', correct: true},
            {text: 'Marco Polo', correct: false},
        ]
    },
    {
    question: 'What is the scientific term for the study of life?',
    answers:[
            {text: 'Biology', correct: true},
            {text: 'Ecology', correct: false},
            {text: 'Zoology', correct: false},
            {text: 'Botany', correct: false},
        ]
    },
    {
    question: 'What is the name of the process by which cells divide and replicate?',
    answers:[
            {text: 'Mitosis', correct: true},
            {text: 'Meiosis', correct: false},
            {text: 'Photosynthesis', correct: false},
            {text: 'Respiration', correct: false},
        ]
    },
    {
    question: 'What is the name of the chemical substance that carries genetic information in living organisms?',
    answers:[
            {text: 'Protein', correct: false},
            {text: 'Lipid', correct: false},
            {text: 'DNA', correct: true},
            {text: 'RNA', correct: false},
        ]
    },
    {
    question: 'What is the name of the theory that explains the origin and evolution of life on Earth?',
    answers:[
            {text: 'Big Bang theory', correct: false},
            {text: 'Evolution theory', correct: true},
            {text: 'Plate tectonics theory', correct: false},
            {text: 'Creationism theory', correct: false},
        ]
    },
    {
    question: 'What is the name of the process by which plants convert sunlight into energy?',
    answers:[
            {text: 'Respiration', correct: false},
            {text: 'Photosynthesis', correct: true},
            {text: 'Transpiration', correct: false},
            {text: 'Digestion', correct: false},
        ]
    },
    {
 question: 'Which country is the world’s largest coffee producer?',
 answers:[
 {text: 'China', correct: false },
 {text: 'Brazil', correct: true },
 {text: 'Columbia', correct: false },
 {text: 'Vietnam', correct: false },
 ]
 },
    {
 question: 'Who painted the “The Weeping Woman?',
 answers:[
 {text: 'Pablo Picasso', correct: true },
 {text: 'Vincent van Gogh', correct: false },
 {text: 'Leonardo da Vinci', correct: false },
 {text: 'Michelangelo', correct: false },
 ]
 },
    {
 question: 'Which of the following instruments is a type of wind instrument?',
 answers:[
 {text: 'Guitar', correct: false },
 {text: 'Trumpet', correct: true },
 {text: 'Drums', correct: false },
 {text: 'Piano', correct: false },
 ]
 },
    {
 question: 'Who is the author of “The Great Gatsby?',
 answers:[
 {text: 'F. Scott Fitzgerald', correct: true },
 {text: 'William Golding', correct: false },
 {text: 'J.D. Salinger', correct: false },
 {text: 'Ernest Hemingway', correct: false },
 ]
 },
    {
 question: 'Which country has the most islands in the world?',
 answers:[
 {text: 'Sweden', correct: true },
 {text: 'Philippines', correct: false },
 {text: 'Norway', correct: false },
 {text: 'Canada', correct: false },
 ]
 },
    {
 question: 'Which of the following is not a cloud type?',
 answers:[
 {text: 'Cumulus', correct: false },
 {text: 'Tornado', correct: true },
 {text: 'Nimbus', correct: false },
 {text: 'Stratus', correct: false },
 ]
 },
    {
 question: 'Who is the frontman for the band “The Rolling Stones”?',
 answers:[
 {text: 'Mick Jagger', correct: true },
 {text: 'Freddie Mercury', correct: false },
 {text: 'David Bowie', correct: false },
 {text: 'Elton John', correct: false },
 ]
 },
    {
 question: 'Who wrote the famous novel “1984”?',
 answers:[
 {text: 'Aldous Huxley', correct: false },
 {text: 'Ray Bradbury', correct: false },
 {text: 'George Orwell', correct: true },
 {text: 'J.R.R. Tolkien', correct: false },
 ]
 },
    {
 question: 'Which of the following artists is nicknamed “King of Pop”?',
 answers:[
 {text: 'Elvis Presley', correct: false },
 {text: 'Michael Jackson', correct: true },
 {text: 'George Michael', correct: false },
 {text: 'David Bowie', correct: false },
 ]
 },
    {
 question: 'World War I ended in:',
 answers:[
 {text: '1918', correct: true },
 {text: '1920', correct: false },
 {text: '1915', correct: false },
 {text: '1925', correct: false },
 ]
 },
    {
 question: 'What country has the second most McDonald’s?',
 answers:[
 {text: 'Japan', correct: true },
 {text: 'USA', correct: false },
 {text: 'China', correct: false },
 {text: 'South Korea', correct: false },
 ]
 },
    {
 question: 'What is the largest continent in the world?',
 answers:[
 {text: 'Asia', correct: true },
 {text: 'Europe', correct: false },
 {text: 'Africa', correct: false },
 {text: 'Australia', correct: false },
 ]
 },
    {
 question: 'Which band has an album titled “Nevermind”?',
 answers:[
 {text: 'Green Day', correct: false },
 {text: 'U2', correct: false },
 {text: 'Nirvana', correct: true },
 {text: 'Gorillaz', correct: false },
 ]
 },
    {
 question: 'When was the first flight in history occured?',
 answers:[
 {text: '1903', correct: true },
 {text: '1910', correct: false },
 {text: '1899', correct: false },
 {text: '1912', correct: false },
 ]
 },
    {
 question: 'Which country is the Colosseum built?',
 answers:[
 {text: 'Italy', correct: true },
 {text: 'Greece', correct: false },
 {text: 'Spain', correct: false },
 {text: 'France', correct: false },
 ]
 },
    {
 question: 'What country gave the “Statue of Liberty” to USA?',
 answers:[
 {text: 'China', correct: false },
 {text: 'France', correct: true },
 {text: 'Russia', correct: false },
 {text: 'Japan', correct: false },
 ]
 },
    {
 question: 'Which country invented the Mozzarella cheese?',
 answers:[
 {text: 'Greece', correct: false },
 {text: 'Italy', correct: true },
 {text: 'Mexico', correct: false },
 {text: 'Switzerland', correct: false },
 ]
 },
    {
 question: 'Who is the author of the series titled “Game of Thrones"?',
 answers:[
 {text: 'George R.R. Martin', correct: true },
 {text: 'Stephen King', correct: false },
 {text: 'F. Scott Fitzgerald', correct: false },
 {text: 'George Washington', correct: false },
 ]
 },
    {
 question: 'Which of the following teams has the most championships in the NBA?',
 answers:[
 {text: 'Golden State Warriors', correct: false },
 {text: 'Boston Celtics', correct: true },
 {text: 'San Antonio Spurs', correct: false },
 {text: 'Chicago Bulls', correct: false },
 ]
 },
    {
 question: 'Where is the “Stonehenge” located?',
 answers:[
 {text: 'Finland', correct: false },
 {text: 'England', correct: true },
 {text: 'Germany', correct: false },
 {text: 'Ireland', correct: false },
 ]
 },
    {
 question: 'What sport is the most viewed in the world?',
 answers:[
 {text: 'Basketball', correct: false },
 {text: 'Baseball', correct: false },
 {text: 'Football/Soccer', correct: true },
 {text: 'Golf', correct: false },
 ]
 },
    {
 question: 'Which of the following is the oldest luxury brand?',
 answers:[
 {text: 'Louis Vuitton', correct: false },
 {text: 'Prada', correct: false },
 {text: 'Hermès', correct: true },
 {text: 'Chanel', correct: false },
 ]
 },
    {
 question: 'What city is the “Lotte World Tower” located in?',
 answers:[
 {text: 'Tokyo', correct: false },
 {text: 'Seoul', correct: true },
 {text: 'Taipei', correct: false },
 {text: 'Beijing', correct: false },
 ]
 },
    {
 question: 'Who composed the famous song titled “Clair De Lune?',
 answers:[
 {text: 'Ludwig van Beethoven', correct: false },
 {text: 'Wolfgang Amadeus Mozart', correct: false },
 {text: 'Claude Debussy', correct: true },
 {text: 'Erik Satie', correct: false },
 ]
 },
    {
 question: 'Where did the French fries originally came from?',
 answers:[
 {text: 'France', correct: false },
 {text: 'Belgium', correct: true },
 {text: 'USA', correct: false },
 {text: 'Germany', correct: false },
 ]
 },
    {
   question: 'Which game is set in the fictional city of Raccoon City?',
        answers: [
          { text: 'Resident Evil', correct: true },
          { text: 'Silent Hill', correct: false },
          { text: 'Dead Space' , correct: false },
          { text: 'Outlast', correct: false }
       ]
   }, 
    {
   question: 'In the game World of Warcraft, what is the name of the Lich Kings weapon?', 
        answers: [
          { text:' Ashbringer', correct: false },
          { text: 'Frostmourne' , correct: true },
          { text: 'Thunderfury', correct: false },
          { text: 'Shadowmourne' , correct: false }
        ]
    }, 
    {
        question: 'Which game features the character Nathan Drake?',
        answers: [
          { text: 'Uncharted' , correct: true },
          { text: 'Tomb Raider', correct: false },
          { text: 'Far Cry', correct: false },
          { text: 'Assassins Creed', correct: false }
        ]
    }, 
    {
        question: 'What is the name of the popular online game where players build structures and battle against each other?',
        answers: [
         { text: 'Minecraft' , correct: false },
         { text: 'Fortnite' , correct: true },
         { text: 'Roblox' , correct: false },
         { text: 'Terraria' , correct: false }
        ]
    }, 
    {
        question: 'In the game Overwatch, how many players are on each team?',
        answers: [
          { text: '4', correct: false },
          { text: '6', correct: true },
          { text: '8', correct: false },
          { text: '10' , correct: false }
        ]
    },     
    {
        question: 'Which game features the character Sonic the Hedgehog?',
        answers: [
          {text: 'Crash Bandicoot', correct: false },
          { text: 'Super Mario Bros.' , correct: false },
          { text: 'Sonic the Hedgehog' , correct: true },
          { text: 'Pac-Man' , correct: false }
        ]
    }, 
    {
        question: 'What is the name of the main character in Assassins Creed?',
        answers: [
          { text: 'Ezio Auditore', correct: true },
          { text: 'Altair Ibn-LaAhad' , correct: false },
          { text: 'Connor Kenway' , correct: false },
          { text: 'Bayek of Siwa' , correct: false }
        ]
    }, 
    {
        question: 'Which game features a character named Gordon Freeman?',
        answers: [
          { text: 'Half-Life', correct: true },
          { text: 'BioShock' , correct: false },
          { text: 'Doom', correct: false },
          { text: 'Portal' , correct: false }
        ]
    }, 
    {
        question: 'In the game Pokémon GO, which team does the player choose to join?',
        answers: [
          { text: 'Team Instinct' , correct: false },
          { text: 'Team Mystic' , correct: false },
          { text: 'Team Valor' , correct: false },
          { text: 'All of the above' , correct: true }
        ]
    }, 
    {
        question: 'Which game is set in the fantasy world of Azeroth?' ,
        answers: [
          { text: 'The Elder Scrolls Online' , correct: false },
          { text: 'Final Fantasy XIV' , correct: false },
          { text: 'Guild Wars 2' , correct: false },
          { text: 'World of Warcraft' , correct: true }
        ]
    },

]

function gameShowed() {
    console.log('Showed')
    game.classList.remove('hidden')
    playButton.classList.add('hide')
    questionContainerElement.classList.add('hide')
    resetState()
    }











var kangaroo = document.querySelector('.kangaroo')
const block = document.getElementById("block")

var jumped = false;


function jump(){
	if(jumped) return
	kangaroo.classList.add('jump')
	jumped = true
	setTimeout(function(){
		kangaroo.classList.remove('jump')
		jumped = false
	}, 500)
}

window.addEventListener('click', function(){
	jump()
})

window.addEventListener('keyup', function(e){
	if(e.key === " "){
		jump()
	}
})


var devagarBtn = document.getElementById("devagar")
var normalBtn = document.getElementById("normal")
var rapidoBtn = document.getElementById("rapido")


var velocidade = 0

function rapido(){
  rapidoBtn.style.display = "none"
  normalBtn.style.display = "none"
  devagarBtn.style.display = "none"

  velocidade = 3
  block.classList.add("rapido")
}

function normal(){
  rapidoBtn.style.display = "none"
  normalBtn.style.display = "none"
  devagarBtn.style.display = "none"

  velocidade = 2

  block.classList.add("normal")
}

function devagar(){
  rapidoBtn.style.display = "none"
  normalBtn.style.display = "none"
  devagarBtn.style.display = "none"

  velocidade = 1

  block.classList.add("devagar")
}


var checkDead = setInterval(() => {
  var kangarooPoisiton = 
    parseInt(window.getComputedStyle(kangaroo).getPropertyValue("top"))

  var blockPosition = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"))

  if (blockPosition < 20 && blockPosition > 0 && kangarooPoisiton >= -50){
    block.className = ""
      
    window.alert("You Lose")
    startButton.classList.remove('hide')

    if (content.childNodes.length == 7){
      var btnReset = document.createElement("button")

      btnReset.innerHTML = "Restart"

      content.appendChild(btnReset)

      btnReset.id = "reset-btn"

      btnReset.addEventListener("click", restart)


    }
    else{
      var btnR = document.getElementById("reset-btn")
      
      btnR.style.display = "block"

    }

  }
}, 10)

function restart(){
  var btnReset = document.getElementById("reset-btn")
  if (velocidade == 3){
    block.classList.add("rapido")
  }

  if (velocidade == 2){
    block.classList.add("normal")
  }

  if (velocidade == 1){
    block.classList.add("devagar")
  }


  btnReset.style.display = "none"
}

restartButton.addEventListener('click', restart)

function restart() {
    console.log('Restart')
    resetState ()
    rapidoBtn.style.display = "inline"
    normalBtn.style.display = "inline"
    devagarBtn.style.display = "inline"
    game.classList.remove('hidden')
    restartButton.classList.add('hide')
    questionContainerElement.classList.add('hide')
    nextButton.classList.add('hide')
    }
