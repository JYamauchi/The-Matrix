var matrix = document.getElementById("matrixCanvas");
var ctx = matrix.getContext("2d");

//making the canvas full screen
matrix.height = window.innerHeight;
matrix.width = window.innerWidth;

//japanese characters - taken from the unicode charset
var japanese = "あいうえおかがきぎくぐけげこご";

//converting the string into an array
japanese = japanese.split("");

var font_size = 15;
var columns = matrix.width/font_size;
//number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-oridnate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1;

//draiwing the characters
function draw() {
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0,0,0,0.05)";
	ctx.fillRect(0,0,matrix.width, matrix.height);

	ctx.fillStyle = "#0066FF";//green text
	ctx.font = font_size + "px arial";

	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random japanese character to print
		var text = japanese[Math.floor(Math.random()*japanese.length)];

		//x = i*font_size, y = value of drops[i]*font_sze
		ctx.fillText(text,i*font_size, drops[i]*font_size);

		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > matrix.height && Math.random() > 0.975)
			drops[i] = 0;

		//incrementing Y coordinate
		drops[i]++;
	}
};

setInterval(draw,30);