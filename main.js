// put your name and visible in page
document.querySelector(".control-buttons span").onclick = function () {
    let yourName = prompt("Whats your name?");
    if (yourName == "" || yourName == null) {
        document.querySelector(".name span").innerHTML = "unknown";
    } else {
        document.querySelector(".name span").innerHTML = yourName
    }
    document.querySelector(".control-buttons").remove();
}

// add effect duration 
let duration = 1000;
let blockscontainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blockscontainer.children);
let rangeOrder = [...Array(blocks.length).keys()];
shuffle(rangeOrder);
// shuffle by order css property
blocks.forEach((block, index) => {
    block.style.order = rangeOrder[index];
    // add event on block
    block.addEventListener("click", function () {
        flipBlock(block);
    })
});

//  flip block function
function flipBlock(selectedBlock) {
    selectedBlock.classList.add("isClicked");
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains("isClicked"));
    if (allFlippedBlocks.length === 2) {
        console.log('Two Flipped Blocks Selected');
        stopClicking();
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
}

// make a shuffle array
function shuffle(array) {
    let current = array.length,
        temp,
        random;
    while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current]
        array[current] = array[random];
        array[random] = temp;
    }
    return array;
}

// limit clicking
function stopClicking() {
    blockscontainer.classList.add("no-clicking");
    
}

// after duration (match or not match with game)
function stopClicking() {
    blockscontainer.classList.add("no-clicking");
    setTimeout(() => {
        blockscontainer.classList.remove("no-clicking");
    }, duration);
}

function checkMatchedBlocks(firstBlock, secondBlock) {

    let triesElement = document.querySelector('.tries-count span');
    if (firstBlock.dataset.technology === secondBlock.dataset.technology){
      firstBlock.classList.remove("isClicked");
      firstBlock.classList.add("has-match");

      secondBlock.classList.remove("isClicked");
      secondBlock.classList.add("has-match");

    }else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) +1;
        setTimeout(() => {
            firstBlock.classList.remove("isClicked");
            secondBlock.classList.remove("isClicked");
        }, duration);
    }
}  

