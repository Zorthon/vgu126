/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:188, height:166,y:canvas.height-150, x:canvas.width-500}).makeSprite(buttonData);
//startButton.img.src="images/mrt.jpg"
startButton.width=200;
startButton.hitBoxWidth=188
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject({width:1024, height:512}).makeSprite(menuData);
//menuBackground.img.src = "images/MainMenu.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play('backgroundMusic', 0, true)
		}

		//Hover Effect Graffic
		//startButton.color = `yellow`
		startButton.changeState('buttonHover')
		menuBackground.changeState('stare')
	}
	else
	{
		//Default Button Graphic
		startButton.changeState('idle')
		menuBackground.changeState('idle')
	}
	
	menuBackground.play().drawSprite();
	startButton.drawSprite();
}
	
	
