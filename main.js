// put your name and visible in page
document.querySelector(".control-buttons span").onclick = function(){
   let yourName = prompt("Whats your name?");
   if (yourName == "" || yourName == null){
document.querySelector(".name span").innerHTML = "unknown";
   }else{
    document.querySelector(".name span").innerHTML = yourName
   }
   document.querySelector(".control-buttons").remove();
}
// add effecgt duration 
let duration =  1000;
let blockscontainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blockscontainer.children);
let rangeOrder = [...Array(blocks.length).keys()];
// shuffle by order css property
blocks.forEach((block, index) => {
    block.style.order = rangeOrder[index];
});