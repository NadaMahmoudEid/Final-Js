var yourName ;
document.querySelector(".control-buttons span").onclick = function () {

 yourName = prompt("Whats Your Name?");
  
  document.querySelector(".info-container span").innerHTML += " "+ yourName;

  document.querySelector(".control-buttons").remove();

};

var duration = 1000;

// Select Blocks Container
var blocksContainer = document.querySelector(".memory-game-blocks");

// Create Array From Game Blocks
var blocks = Array.from(blocksContainer.children);

var orderRange = Array.from(Array(blocks.length).keys());


shuffle(orderRange);
// console.log(orderRange);

// Add Order Css Property To Game Blocks
blocks.forEach((block, index) => {

  // Add CSS Order Property
  block.style.order = orderRange[index];

  // Add Click Event
  block.addEventListener('click', function () {

    // Trigger The Flip Block Function
    flipBlock(block);

  });

});

// Flip Block Function
function flipBlock(selectedBlock) {

  // Add Class is-flipped
  selectedBlock.classList.add('is-flipped');

  // Collect All Flipped Cards
  var allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
  
 
  if (allFlippedBlocks.length === 2) {

    // Stop Clicking Function
    stopClicking();

    // Check Matched Block Function
    checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);

  }

}

// Stop Clicking Function
function stopClicking() {

  // Add Class No Clicking on Main Container
  blocksContainer.classList.add('no-clicking');

  setTimeout(() => {

    blocksContainer.classList.remove('no-clicking');

  }, duration);

}

// Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock) {

  if (firstBlock.dataset.technology == secondBlock.dataset.technology) {

    firstBlock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped');

    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');
    

load();
   

  } else {


    setTimeout(() => {

      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');

    }, duration);



  }

}

// Shuffle Function
function shuffle(array) {

  var current = array.length,
      temp,
      random;

  while (current > 0) {

    random = Math.floor(Math.random() * current);
    current--;
    temp = array[current];
    array[current] = array[random];
    array[random] = temp;

  }
  return array;
}
// Finish Game 
function load(){

  var hasMatched =Array.from( document.getElementsByClassName('has-match'));
  console.log(hasMatched);
  if(hasMatched.length == 12)
  {
    document.querySelector(".info-container span").innerHTML ="CONGRATULATIONS";

       setTimeout(function(){

        window.location.reload();

       },2000)
  }
}
