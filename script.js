var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var lvl=6;

easyBtn.addEventListener("click", function()    {
      easyBtn.classList.add("selected");
      hardBtn.classList.remove("selected");
      lvl = 3;
      reset();
});
hardBtn.addEventListener("click", function()    {
      hardBtn.classList.add("selected");
      easyBtn.classList.remove("selected");
      lvl = 6;
      reset();
});

resetButton.addEventListener("click", reset);

//Setting  up the answer color;
colorDisplay.textContent = pickedColor;

//Setting  up the colors of all square boxes

init();

//Changing the colors of all squares, when correct answer
function changeColor(color)    {
      for(var i=0; i<colors.length; i++)
            squares[i].style.backgroundColor = color;
}

//Randomly picks up a color from color array
function pickColor()    {
      var random = Math.floor( Math.random()*colors.length );
      return colors[random];
}

//Generate an array of random colors
function generateRandomColors(num)     {
      var arr = [];
      
      for(var i=0; i<num; i++)      {
            arr.push(randomColor());
      }

      return arr;
}

//Generate a random color
function randomColor()  {
      var r = Math.floor( Math.random() * 256 );
      var g = Math.floor( Math.random() * 256 );
      var b = Math.floor( Math.random() * 256 );

      var col = "rgb(" + r + ", " + g + ", " + b + ")";
      return col;
}

// To reset all the combinations
function reset() {
      // Generate new random colors 
      colors = generateRandomColors(lvl);
      //Pick up a new random color
      pickedColor = pickColor();
      //Change the display of picked color
      colorDisplay.textContent = pickedColor;
      //Change the colors of squares
      
      for(var i=0; i<squares.length; i++)       {            
            if(colors[i])     {
                  squares[i].style.display = "block";
                  squares[i].style.backgroundColor = colors[i];
            }                  
            else
                  squares[i].style.display = "none";
      }

      h1.style.backgroundColor = "steelblue";
      resetButton.textContent ="New Colors";
      messageDisplay.textContent = "";
}

function init()   {
      for(var i=0; i<squares.length; i++)       {
      
            reset();
            squares[i].addEventListener("click", function()       {      
                  var clickedColor = this.style.backgroundColor;      
      
                  if(clickedColor === pickedColor)    {
                        messageDisplay.textContent = "Correct";
                        changeColor(clickedColor);
                        h1.style.backgroundColor = clickedColor;
                        resetButton.textContent = "PLAY Again!!"
                  }                     
      
                  else  {
                        this.style.backgroundColor = "#232323";
                        messageDisplay.textContent = "Try Again! ";
                  }                  
            }); 
      }
      
}