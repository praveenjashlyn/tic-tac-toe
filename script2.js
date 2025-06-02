let buttons=document.querySelectorAll(".cells")

let msg=document.querySelector("#message")
let resetbtn=document.querySelector("#reset")
let count=0;
turnx=true;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
resetbtn.addEventListener("click",()=>{
    buttons.forEach((cells)=>{
        turnx=true;
        cells.innerText="";
        cells.disabled=false;
        msg.innerText=""
        count=0;
    })
})
buttons.forEach((cells)=>{
    cells.addEventListener("click",()=>{
        console.log("button clicked")
        count++;
        console.log(count)
        if(turnx){
            cells.innerText="X"
            turnx=false;
        }
        else{
            cells.innerText="O"
            turnx=true;
        }
        cells.disabled=true;
        
        let a=checkWinner();
        if(a=="X"){
            msg.innerText="X is the winner"
            disableButtons();
        }
        else if(a=="O"){        
            msg.innerText="O is the winner"
        disableButtons();
        }
        else if(count==9){
            msg.innerText="Draw"
            
        }
        
    })
    

})

const checkWinner=()=>{
    for(pattern of winPattern){
        // console.log(buttons[pattern[0]].innerText,buttons[pattern[1]].innerText,buttons[pattern[2]].innerText)
        let pos1val=buttons[pattern[0]].innerText;
        let pos2val=buttons[pattern[1]].innerText;
        let pos3val=buttons[pattern[2]].innerText;
        if (pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner is " +pos1val)
                return pos1val;
            }
        }
    }
}
const disableButtons=()=>{
    for(let i of buttons)
        i.disabled=true;
}