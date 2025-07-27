const questions=[
  {
question:"Who is the current Prime Minister of Nepal?",
answers:[
  {answer:"KP OLI",correct:true},
  {answer:"Sher Bahadur Deuba",correct:false},
  {answer:"Puspa Kamal Dahal",correct:false},
  {answer:"Rabi Lamichhane",correct:false}
]
  },
  {
question:" Who is Known as 'Mahanayak' of Nepali movie industry?",
answers:[
  {answer:"Bhuwan KC",correct:false},
  {answer:"Shiva Shrestha",correct:false},
  {answer:"Rajesh Hamal",correct:true},
  {answer:"Sunil Thapa",correct:false}
]
  },
  {
question:"What is the National Animal of Nepal?",
answers:[
  {answer:"Dog",correct:false},
  {answer:"Cow",correct:true},
  {answer:"Rhino",correct:false},
  {answer:"Elephant",correct:false}
]
  },
  {
question:"How many colors are there in Nepali national flag?",
answers:[
  {answer:"3(Red,blue,white)",correct:true},
  {answer:"3(Red,green,white)",correct:false},
  {answer:"3(Red,blue,yellow)",correct:false},
  {answer:"2(Red,blue)",correct:false}
]
  },
]
console.log(questions[0].question,questions[0].answers[1].answer);


let i=0;
 
const nextBtn=document.querySelector('.nextBtn')
const questionBox=document.querySelector('.questions');
const ansdiv=document.querySelector('.answerButtons')
const scoreBox=document.querySelector('.scoreBox')
let score=0;

function questionNum(i){
  reset();
  document.querySelector('.questions').innerHTML=questions[i].question
questions[i].answers.forEach(answer => {
    const button=document.createElement('button')
    button.classList.add('btn')
    button.innerHTML=answer.answer
  
    
    ansdiv.appendChild(button)
  button.addEventListener('click',()=>{
  if(answer.correct){
button.style.backgroundColor='green';
  
 score++
 
  }
  else{
    button.style.backgroundColor='red';
  }
Array.from(ansdiv.children).forEach(btn => btn.disabled = true);
nextBtn.style.display = 'inline-block';
ansdiv.appendChild(button)
});

});
}
function reset(){
  nextBtn.style.display='none'
  while(ansdiv.firstChild){
    ansdiv.remove(ansdiv.firstChild)
  }
  }
 
nextBtn.addEventListener('click', () => {
  i++;
  if (i < questions.length) {
    questionNum(i);
  } else {
    questionBox.innerHTML = "Quiz Completed!";
    ansdiv.innerHTML = '';
    nextBtn.style.display = 'none';
    scoreBox.innerHTML = `Your Score: ${score} / ${questions.length}`;
  }
});
 


  
   
 questionNum(i);
 





