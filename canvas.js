window.onload = function()
{
 
  		var c = document.getElementById("mon_canvas");
  		var ctx = c.getContext("2d");
	
      ctx.beginPath();
      ctx.moveTo(200, 0);
      ctx.lineTo(300, 90);
      ctx.moveTo(200, 0);
      ctx.lineTo(0, 90);
      ctx.stroke();
      ctx.closePath();
      ctx.fillStyle = "red";

      ctx.beginPath();
      ctx.moveTo(210, 0);
      ctx.lineTo(300, 105);
      ctx.moveTo(205, 0);
      ctx.lineTo(0, 90);
      ctx.stroke();
      ctx.closePath();




      ctx.beginPath();
      ctx.moveTo(0, 180);
      ctx.lineTo(200, 310);
      ctx.moveTo(450, 110);
      ctx.lineTo(200, 300);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(0, 180);
      ctx.lineTo(190, 300);
      ctx.moveTo(450, 110);
      ctx.lineTo(195, 295);
      ctx.stroke();
      ctx.closePath();


      //ctx.fillStyle = "red";
      //ctx.strokeStyle = "#ecf0f1";
}