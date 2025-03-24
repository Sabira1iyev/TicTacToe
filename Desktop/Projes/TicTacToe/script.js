let currentPlayer = "X";  
let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

document.querySelectorAll(".cell").forEach((cell, index) => {
    cell.addEventListener("click", function () {
        let row = Math.floor(index / 3);  
        let col = index % 3;             

        if (board[row][col] === "") {
            board[row][col] = currentPlayer;
            cell.innerText = currentPlayer;  


            if (checkWinner()) {
                setTimeout(() => {
                    alert(currentPlayer + " kazandı!");  
                    resetBoard();  
                }, 100);
                return;  
            }
        chechDraw();
            
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});


function checkWinner() {
    // Satırlar
    for (let row = 0; row < 3; row++) {
        if (board[row][0] && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
            return true; 
        }
    }

    
    for (let col = 0; col < 3; col++) {
        if (board[0][col] && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
            return true;  
        }
    }

    // Çaprazlar
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return true;  
    }

    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return true; 
    }

    return false;  
}
function resetBoard() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    document.querySelectorAll(".cell").forEach(cell => {
        cell.innerText = "";  
    });
}

function chechDraw(){

    let isDraw = true;
    board.forEach(row=>{
        row.forEach(cell=>{
            if(cell ===""){
                isDraw = false;
            }
        });
    });
    if(isDraw && !checkWinner()){
        alert("ayyy yaziqlarrr hec biriniz qazana bilmedi!");
        resetBoard();
    }
}
