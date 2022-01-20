// JavaScript source code
// Eventlistener and variables are initialised.
const playground = document.getElementById("playground");

document.body.addEventListener('keydown', keyPress);

var goalcount = 0;

var player = {

	x: -1,

	y: -1

};





// Calls the function move player upon pressing arrow keys.
function keyPress(e) {

	switch (e.key) {

		case 'ArrowUp':

			movePlayer(-1, 0);

			break;



		case 'ArrowDown':

			movePlayer(1, 0);



			break;



		case 'ArrowLeft':

			movePlayer(0, -1);



			break;



		case 'ArrowRight':

			movePlayer(0, 1);



			break;



		default:


            throw "arrows only!";
			break;

	}

}


// This function moves the player and the boxes.
function movePlayer(x, y)
{

	var newY = player.y + y;

	var newX = player.x + x;

    var nextY = player.y + 2*y;
    var nextX = player.x + 2*x;

    var playerElement = document.getElementById("x" + player.x + "y" + player.y);

    var destination = document.getElementById("x" + newX + "y" + newY);
    if (document.getElementById("x" + newX + "y" + newY).classList.contains("W") == false)
    {
        if ((document.getElementById("x" + newX + "y" + newY).classList.contains("B") || document.getElementById("x" + newX + "y" + newY).classList.contains("BG")))
        {
            var blockdestination = document.getElementById("x" + nextX + "y" + nextY);
            if (document.getElementById("x" + nextX + "y" + nextY).classList.contains("W") == false)
            {
                if ((document.getElementById("x" + nextX + "y" + nextY).classList.contains("B") || document.getElementById("x" + nextX + "y" + nextY).classList.contains("BG")) == false) {
                    if (document.getElementById("x" + nextX + "y" + nextY).classList.contains("G")) {
                        blockdestination.style.background.color = "green";
                        goalcount = goalcount + 1;
                        blockdestination.classList.add("BG");
                        blockdestination.classList.remove("G");
                        playerElement.style.background.color = "white";
                        playerElement.classList.remove("player");
                        if (document.getElementById("x" + newX + "y" + newY).classList.contains("BG")) {
                            destination.classList.remove("BG");
                            destination.classList.add("G");
                            goalcount = goalcount - 1;
                            destination.classList.add("player");
                            destination.style.background.color = "purple";
                            player.x = newX;

                            player.y = newY;
                        }
                        else {
                            destination.style.background.color = "purple";
                            destination.classList.remove("B");
                            destination.classList.add("player");
                            player.x = newX;

                            player.y = newY;
                        }
                       
                    }

                    else {
                        blockdestination.style.background.color = "black";
                        blockdestination.classList.add("B");
                        playerElement.style.background.color = "white";
                    if (document.getElementById("x" + newX + "y" + newY).classList.contains("BG")) {
                        destination.classList.remove("BG");
                        destination.classList.add("G");
                        goalcount = goalcount - 1;
                             
                        destination.style.background.color = "purple";
                        playerElement.classList.remove("player");
                        destination.classList.add("player");
                            player.x = newX;

                            player.y = newY;

                        }

                        else {
                            destination.style.background.color = "purple";
                            playerElement.classList.remove("player");
                            destination.classList.remove("B");
                            destination.classList.add("player");

                            player.x = newX;

                            player.y = newY;
                        }
                    }
                
                   
                }
            }
        }
   


 else {

        playerElement.style.background.color = "white";
        destination.style.background.color = "purple";
        playerElement.classList.remove("player");
        destination.classList.add("player");
        player.x = newX;
        player.y = newY;
      }
    }// When all boxes are in goal victorybanner is displayed.
    if ((goalcount == 6)) {
        var element = document.createElement("div");

        element.classList.add("Victory");

        element.id = "Victory";

        playground.appendChild(element);

        document.getElementById("Victory").innerHTML = "Victory!";
    }
}


// The tile map  of the playground is found below.

/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/

/*   Enum of CSS Classes for the static elements   */
var Tiles = {
    Wall: "tile-wall",
    Space: "tile-space",
    Goal: "tile-goal",
};

/*   Enum of CSS Classes for the moving elements   */
var Entities = {
    Character: "entity-player",
    Block: "entity-block",
    BlockDone: "entity-block-goal",
};

/*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/
var tileMap01 = {
    width: 19,
    height: 16,
    mapGrid: [
        [
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            ["W"],
            [" "],
            [" "],
            [" "],
            ["W"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            ["W"],
            ["B"],
            [" "],
            [" "],
            ["W"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            ["W"],
            ["W"],
            ["W"],
            [" "],
            [" "],
            ["B"],
            ["W"],
            ["W"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            ["W"],
            [" "],
            [" "],
            ["B"],
            [" "],
            ["B"],
            [" "],
            ["W"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            ["W"],
            ["W"],
            ["W"],
            [" "],
            ["W"],
            [" "],
            ["W"],
            ["W"],
            [" "],
            ["W"],
            [" "],
            [" "],
            [" "],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
        ],
        [
            ["W"],
            [" "],
            [" "],
            [" "],
            ["W"],
            [" "],
            ["W"],
            ["W"],
            [" "],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            [" "],
            [" "],
            ["G"],
            ["G"],
            ["W"],
        ],
        [
            ["W"],
            [" "],
            ["B"],
            [" "],
            [" "],
            ["B"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            ["G"],
            ["G"],
            ["W"],
        ],
        [
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            [" "],
            ["W"],
            ["W"],
            ["W"],
            [" "],
            ["W"],
            [" "],
            ["W"],
            ["W"],
            [" "],
            [" "],
            ["G"],
            ["G"],
            ["W"],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            ["W"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            ["W"],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
        [
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
            [" "],
        ],
    ],
};
// This function builds up the playground.
function initializeMap() {


    for (let col = 0; col < tileMap01.width; col++) {

        for (let row = 0; row < tileMap01.height; row++) {

            var element = document.createElement("div");

            element.classList.add("block");

            if (tileMap01.mapGrid[row][col][0] !== ' ') {

               



                element.classList.add(tileMap01.mapGrid[row][col][0]);

            }

            element.id = "x" + row + "y" + col;
            xpos = row * 23;
            ypos = col * 23;
            element.style.top = element.style.top + xpos+ "px";
            element.style.left = element.style.left + ypos+"px";
            

            if (row === 11 && col === 11) {

                element.classList.add("player");

                player.x = row;

                player.y = col;

            }

            playground.appendChild(element);

        }

    }

}

