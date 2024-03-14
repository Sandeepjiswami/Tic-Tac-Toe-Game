let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        // box.innerText="Abc"
        if (turnO === true) {
            box.innerText = "o";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        };
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (Winner) => {
    alert(Winner);
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText
        if (pos1val != '' && pos2val != '' && pos3val != '') {
            if (pos1val === pos2val && pos2val == pos3val) {
                showWinner(pos1val);
            }
        }
    }

}