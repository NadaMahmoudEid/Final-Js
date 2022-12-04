var rows = 5;
var columns = 5;
var currTile;
var otherTile;
var tries = 0;

window.onload = function () {
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < columns; c++) {
      var tile = document.createElement("img");
      tile.src = "images/blank2.jpg";

      tile.addEventListener("dragstart", function dragStart() {
        currTile = this;
      });
      tile.addEventListener("dragover", function dragOver(e) {
        e.preventDefault();
      });
      tile.addEventListener("dragenter", function dragEnter(e) {
        e.preventDefault();
      });
      tile.addEventListener("dragleave", function dragLeave() {});
      tile.addEventListener("drop", function dragDrop() {
        otherTile = this;
      });
      tile.addEventListener("dragend", function dragEnd() {
        if (currTile.src.includes("blank")) {
          return;
        }
        var currImg = currTile.src;
        var otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;

        tries += 1;
        document.getElementById("tries").innerText = tries;
      });

      document.getElementById("board").append(tile);
    }
  }

  var pieces = [];
  for (var i = 1; i <= rows * columns + 1; i++) {
    pieces.push(i.toString());
  }
  pieces.reverse();
  for (var i = 0; i < pieces.length; i++) {
    var j = Math.floor(Math.random() * pieces.length);

    var tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
  }

  for (var i = 0; i < pieces.length; i++) {
    var tile = document.createElement("img");
    tile.src = "./images/" + pieces[i] + ".jpg";

    tile.addEventListener("dragstart", function dragStart() {
      currTile = this;
    });
    tile.addEventListener("dragover", function dragOver(e) {
      e.preventDefault();
    });
    tile.addEventListener("dragenter", function dragEnter(e) {
      e.preventDefault();
    });
    tile.addEventListener("dragleave", function dragLeave() {});
    tile.addEventListener("drop", function dragDrop() {
      otherTile = this;
    });
    tile.addEventListener("dragend", function dragEnd() {
      if (currTile.src.includes("blank")) {
        return;
      }
      var currImg = currTile.src;
      var otherImg = otherTile.src;
      currTile.src = otherImg;
      otherTile.src = currImg;

      tries += 1;
      document.getElementById("tries").innerText = tries;
    });

    document.getElementById("pieces").append(tile);
  }
};
