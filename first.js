let boxes =document.querySelectorAll('.box');
let winner=document.getElementsByClassName("firstdiv");
let resetBtn =document.getElementsByClassName('reset')[0];
let newGame=document.getElementsByClassName("newBtn");

let turn='X';
let winningCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],            
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("   Box clicked");
        if(turn==='X')
        {
            box.innerText="X";
            turn='O';
        }
        else
        {
            box.innerText="O";
            turn='X';
        }
        box.style.pointerEvents = "none";
        box.style.backgroundColor="red"; 
        checkWinner();
        
        

     });
       
    });
    let closeclick=()=>
    {
        boxes.forEach((box)=>{
            box.style.pointerEvents="none";
        }
        );
    }
    let checkWinner=() =>
    {
        for (combo of winningCombos)
        {
            let [a,b,c]=combo;
            if (boxes[a].innerText!="" && boxes[a].innerText==boxes[b].innerText && boxes[b].innerText==boxes[c].innerText) 
       {
        winner[0].innerText="Winner is "+ boxes[a].innerText
        closeclick();
        newGame[0].classList.remove("hide")
        
    }
        }
    }
    let gamestart=() =>
    {
        boxes.forEach((box) =>
        {
            box.innerText="";
            box.style.backgroundColor="cornsilk";
            box.style.pointerEvents="auto";

        }
    )

        newGame[0].classList.add("hide");
        turn='X';

    }
    
    newGame[0].addEventListener("click",gamestart);
    resetBtn.addEventListener("click",gamestart);

    
    
    
    
   