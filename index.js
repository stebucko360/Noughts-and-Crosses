let firstInvocation = true;

const changeIcon = (gridNum) => {
let noughtsOrCross = 'X';
const playerTurn = player();
if(playerTurn === 'playerOne') {
noughtsOrCross = 'O'
}
const gridRef = document.getElementsByClassName(gridNum);
    gridRef[0].innerText = noughtsOrCross;
    gridRef[0].onclick = null;
};


const player = () =>{
    
    if(firstInvocation){
        firstInvocation = false;
        return 'playerOne';
    } else {
        firstInvocation = true;
        return 'playerTwo';
    };
};
