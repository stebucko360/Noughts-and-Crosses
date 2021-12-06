let firstInvocation = true;
const currentValues = []

const changeIcon = (gridNum) => {
let noughtsOrCross = 'X';
const playerTurn = player();
if(playerTurn === 'playerOne') {
noughtsOrCross = 'O'
}

const gridRef = document.getElementsByClassName(gridNum);
    gridRef[0].innerText = noughtsOrCross;
    gridRef[0].onclick = null;

checkWinner(gridNum, noughtsOrCross);
console.log(currentValues)
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

const checkWinner = (gridNum, xo) => {

if (gridNum === 'one' && xo === 'X'){
    currentValues.splice(0, 0, 'X')
} else if (gridNum === 'one' && xo === 'O'){
    currentValues.splice(0, 0, 'O')
} else if (gridNum === 'two' && xo === 'X'){
    currentValues.splice(1, 0, 'X')
} else if (gridNum === 'two' && xo === 'O'){
    currentValues.splice(1, 0, 'O')
} else if (gridNum === 'three' && xo === 'X'){
    currentValues.splice(2, 0, 'X')
} else if (gridNum === 'three' && xo === 'O'){
    currentValues.splice(2, 0, 'O')
} else if (gridNum === 'four' && xo === 'X'){
    currentValues.splice(3, 0, 'X')
} else if (gridNum === 'four' && xo === 'O'){
    currentValues.splice(3, 0, 'O')
} else if (gridNum === 'five' && xo === 'X'){
    currentValues.splice(4, 0, 'X')
} else if (gridNum === 'five' && xo === 'O'){
    currentValues.splice(4, 0, 'O')
} else if (gridNum === 'six' && xo === 'X'){
    currentValues.splice(5, 0, 'X')
} else if (gridNum === 'six' && xo === 'O'){
    currentValues.splice(5, 0, 'O')
} else if (gridNum === 'seven' && xo === 'X'){
    currentValues.splice(6, 0, 'X')
} else if (gridNum === 'seven' && xo === 'O'){
    currentValues.splice(6, 0, 'O')
} else if (gridNum === 'eight' && xo === 'X'){
    currentValues.splice(7, 0, 'X')
} else if (gridNum === 'eight' && xo === 'O'){
    currentValues.splice(7, 0, 'O')
} else if (gridNum === 'nine' && xo === 'X'){
    currentValues.splice(8, 0, 'X')
} else if (gridNum === 'nine' && xo === 'O'){
    currentValues.splice(8, 0, 'O')
} 
};

