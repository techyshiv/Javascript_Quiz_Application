// Questions
window.onload=function(){
    Show(0);
}
let questions=[
    {
        id:1,
        question:"What is the full form of RAM ?",
        answer:"Random Access Memory",
        options:[
            "Random Access Memory",
            "Randomly Access Memory",
            "Read Access Memory",
            "None of these"
        ]
    },
    {
        id:2,
        question:"What is the full form of CPU ?",
        answer:"Central Processing Unit",
        options:[
            "Central Processing Unit",
            "Randomly Access Memory",
            "Read Access Memory",
            "None of these"
        ]
    },
    {
        id:3,
        question:"What is the full form of E-Mail ?",
        answer:"Electronic Mail",
        options:[
            "Electronic Mail",
            "Randomly Access Memory",
            "Read Access Memory",
            "None of these"
        ]
    },
    {
        id:4,
        question:"What is the full form of IIT ?",
        answer:"Indian Institute of Technology",
        options:[
            "Indian Institute of Technology",
            "Randomly Access Memory",
            "Read Access Memory",
            "None of these"
        ]
    }
]

function SubmitForm(e){
    e.preventDefault();
    let name = document.forms["welcome_form"]["username"].value;
    // Store Player name
    sessionStorage.setItem("Name",name);
    location.href="quiz.html";
}

let question_count=0;
let quiz_point =0;
function Next(){
    let user_answer = document.querySelector("li.option.active").innerHTML;
    console.log(user_answer);
    // check answer by user
    if(user_answer===questions[question_count].answer){
        // alert("Right Anser");
        quiz_point+=10;
        sessionStorage.setItem('Points',quiz_point);
    }
    else{
        // alert("Wrong answer");
        quiz_point-=1;
    }
    if(question_count==questions.length-1){
        sessionStorage.setItem("Time",`${minutes} minutes and ${seconds} seconds`);
        clearInterval(myTime);
        location.href="end.html";
        return;
    }
    question_count++;
    Show(question_count);
}

function Show(count){
    let question = document.getElementById("questions");
    question.innerHTML=`<h2> Q${count+1}. ${questions[count].question}</h2>
    <ul class="option_group">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
    </ul>
    `;
    toggleActive();
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0;i<option.length;i++){
        option[i].onclick = function(){
            for(let j=0;j<option.length;j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}