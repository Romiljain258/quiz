
const startButton=document.getElementById("startButton");
let pause=document.getElementById("pause");
let start=document.getElementById("start");
const question=document.getElementById("question");
let option1=document.getElementById("1");
let option2=document.getElementById("2");
let option3=document.getElementById("3");
let option4=document.getElementById("4");
let score=document.getElementById("score");
let timer=document.getElementById("timer");
let result=document.getElementById("result");
let score2=document.getElementById("score2");

const ques=[
    {
question : "1. What type of Party system has been evolved in India?",
option1 : "Multi-Party",
option2 : "single-Party",
option3 : "double-Party",
option4 : "central-Party",
ans : "1"
},
{
question : "2. Which bank is the Banker of the Banks?",

option1 : "UBI",
option2 : "PNB",
option3 : "RBI",
option4 : "SBI",
ans : "3"
},
{
    question : "3. Folk painting ‘Madhu Bani’ is famous in which state?",

    option1 : "Punjab",
    option2 : "Uttar Pradesh",
    option3 : "Bihar",
    option4 : "Madhya Pradesh",
    ans : "3"
},
    {
    question : "4. The largest state by population in india? ",
        option1 : "Madhya Pradesh",
        option2 : "Delhi",
        option3 : "Rajasthan",
        option4 : "Uttar Pradesh",
        ans : "4"
        },
        {
            question : "5.Which gives the same answer as 5+5+5+5?",
            option1 : "5 x 2",
            option2 : "10 x 2",
            option3 : "20 x 2",
            option4 : "10 + 2",
            ans : "2"
            },
            {
                question : "6. Which one of the following is not a parallelogram?",
                    option1 : "Rhombus",
                    option2 : "Rectangle",
                    option3 : "Square",
                    option4 : "Circle",
                    ans : "4"
                    },
                    {
                        question : "7. Who was the first Indian woman in Space?",
                            option1 : "Kalpana Chawla",
                            option2 : "Sunita Williams",
                            option3 : "Koneru Humpy",
                            option4 : "None of the above",
                            ans : "1"
                            },
                            {
                                question : "8. ______ the all-natural bread? Yes, it was very good.",
                                    option1 : "Did you try",
                                    option2 : "Did you",
                                    option3 : "Tried you",
                                    option4 : "Did you tried",
                                    ans : "1"
                                    },
                                    {
                                        question : "9. Monica is tired. She doesn't want to go ______ school. ",
                                            option1 : "at",
                                            option2 : "for",
                                            option3 : "to",
                                            option4 : "in",
                                            ans : "3"
                                            },
                                            {
                                                question : "10. She ______ blue velvet to the party last night.",
                                                    option1 : "Worm",
                                                    option2 : "war",
                                                    option3 : "Wear",
                                                    option4 : "Wore",
                                                    ans : "4"
                                                    },
];

var runningQues=0;
let  len=ques.length;
var countScore=0;
startButton.addEventListener("click",Fstart);

function Fstart(){
    pause.style.display = "none";
    start.style.display = "block";
    let q = ques[runningQues];
    question.innerHTML=q.question;
    option1.innerHTML=q.option1;
    option2.innerHTML=q.option2;
    option3.innerHTML=q.option3;
    option4.innerHTML=q.option4;
    if(runningQues<len){
    Timer();
    }
}

function Timer(){
    let counter=11;
    setInterval(function(){
        counter--;

        if(counter >= 0){
            id=document.getElementById("timer");
            id.innerHTML=counter;
            id.className="time";
        }
        if(counter==0){
            runningQues++;
            if(runningQues<len){
            Fstart();    
            nextClickAble(); 
            }else{
                option1.style.display="none";
                option2.style.display="none";
                option3.style.display="none";
                option4.style.display="none";   
                id.style.display="none";           
                question.innerHTML="Quiz Over......!!!";

            }    
        }
    },1000);
}

function button(ele){
    if(ele.id===ques[runningQues].ans){
        notClickAble();
       ele.className="correct";
       ele.innerHTML="correct";
       countScore++;
       ShowCount();
    }
    else{
        notClickAble();
        ele.className="wrong";
       ele.innerHTML="wrong";
        
    }
}
function  notClickAble(){
        option1.style.pointerEvents="none";
        option2.style.pointerEvents="none";
        option3.style.pointerEvents="none";
        option4.style.pointerEvents="none";
}
function nextClickAble(){
    option1.style.pointerEvents="auto";
    option2.style.pointerEvents="auto";
    option3.style.pointerEvents="auto";
    option4.style.pointerEvents="auto";

    option1.className='option';
    option2.className='option';
    option3.className='option';
    option4.className='option';
}

function ShowCount(){
    score.innerHTML=countScore;
}

window.onbeforeunload = function() {
    return "Warning!! This will reload your page";
  };
