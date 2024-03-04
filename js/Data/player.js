/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/Bear2.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:128, height:128, startX:0, startY:256},
				{width:128, height:128, startX:1*128, startY:256},
				{width:128, height:128, startX:2*128, startY:256},
				{width:128, height:128, startX:3*128, startY:256},
				{width:128, height:128, startX:4*128, startY:256}
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:3,
			cycle:true,
			frames:
			[
				{width:128, height:128, startX:0, startY:512},
				{width:128, height:128, startX:1*128, startY:512},
				{width:128, height:128, startX:2*128, startY:512}
	
			]
		},
		//The jump animation 
		jump:
		{
			fps:15,
			cycle:false,
			frames:
			[
				{width:128, height:128, startX:0, startY:384},
				//{width:128, height:128, startX:0*128, startY:384},
				//{width:128, height:128, startX:1*128, startY:384},
				{width:128, height:128, startX:2*128, startY:384},
				//{width:128, height:128, startX:3*128, startY:384},
				//{width:128, height:128, startX:4*128, startY:384}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:128, height:128, startX:1*128, startY:128}
				
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:false,
			//width:196,
			frames:
			[
				//{width:196, height:128, startX:0, startY:0},
				{width:262, height:128, startX:0*262, startY:0},
				{width:262, height:128, startX:1*262, startY:0},
				{width:262, height:128, startX:2*262, startY:0},
				{width:262, height:128, startX:3*262, startY:0},
				{width:262, height:128, startX:4*262, startY:0},
				{width:262, height:128, startX:5*262, startY:0}
	
			]
		},
		//Bullet animation
		bullet:
		{
			fps: 6,
			cycle: true,
			frames:
			[
				{width:64, height:64, startX:0, startY:640},
				{width:64, height:64, startX:1*64, startY:640},
				{width:64, height:64, startX:2*64, startY:640},
				{width:64, height:64, startX:3*64, startY:640},
				{width:64, height:64, startX:4*64, startY:640},
				{width:64, height:64, startX:5*64, startY:640},
			]
		}
	}
		
}