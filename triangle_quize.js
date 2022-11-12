var formQuize=document.querySelector(".quize-form");
var submitBtn=document.querySelector(".submit-btn");
var output=document.querySelector(".output");

const answers=["55°","Isosceles","4 cm","BF = CE","60°"]

function calculateScore(){
    
    let score=0;
    let index=0;
    const formAns=new FormData(formQuize);
    for(let value in formAns.values()){
        if(value===answers[index]){
            score=score+1;
        }
            index=index+1;
        }
    if(score>2){
        output.innerText="Passed! Your Score is: " + score + "/5 ";
        output.style.color = "green";
    }
    else{
        output.innerText="Failed!Your Score is: " + score + "/5.";
        output.style.color = "red";
    }
}


submitBtn.addEventListener("click",calculateScore);