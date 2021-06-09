//Define Canvas 
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height=600;
            
    var context = canvas.getContext("2d");
    context.fillStyle="white";
    context.fillRect(0,0, canvas.width,canvas.height);
            
            
    var is_drawing = false;
    var draw_width ="2";
    var draw_color="black";
            
            
    canvas.addEventListener("mousedown", start, false);
    canvas.addEventListener("mousemove", draw, false);
    canvas.addEventListener("mouseup",stop,false);
    canvas.addEventListener("mouseout",stop,false);
//------------------------------------------------------------
    //Change Color
    var colors =document.querySelectorAll(".color");
    function change_color(element){
        remove();
        draw_color=element.style.backgroundColor; 
        draw_width="2";
        element.classList.add("active");
    }
    function remove(){
            colors.forEach((element)=>{
                element.classList.remove("active");
            });
    }
//---------------------------------------------------------- 
    //Drawing 
    function start(event){
        is_drawing = true;
        context.beginPath();
        context.moveTo(event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop);
        event.preventDefault();
    }
    function draw(event){
        if(is_drawing){
            context.lineTo(event.clientX - canvas.offsetLeft,
            event.clientY - canvas.offsetTop);
            context.strokeStyle=draw_color;
            context.lineWidth = draw_width;
            context.lineCap ="round";
            context.lineJoin = "round";
            context.stroke();
        }
    }
    function stop(event){
            if(is_drawing){
            context.stroke();
            context.closePath();
            is_drawing=false;
        }
        event.preventDefault();
    }
//---------------------------------------------------------------- 
    // Drag/Drop Stickers
    function DragOver(ev) {
            ev.preventDefault();
        }
    function DragStart(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        }
    function Drop(ev) {
          ev.preventDefault();
          var data = ev.dataTransfer.getData("text");
          var img = document.getElementById(data);
          context.drawImage(img, ev.clientX, ev.clientY, 50, 50);
        }  
//------------------------------------------------------------------
    //Eraser Function
    document.getElementById('eraser').addEventListener('click', eraser);
    function eraser() {
        draw_width = "50";
        draw_color = context.fillStyle;
    }
//------------------------------------------------------------------
    //Clear Function
        document.getElementById('clear').addEventListener('click', clear);
        function clear(){
            var canvas = document.getElementById("canvas");
            canvas.width = 800;
            canvas.height=600;
            var context = canvas.getContext("2d");
            context.fillStyle="white";
            context.fillRect(0,0, canvas.width,canvas.height);
            var is_drawing = false;
            var draw_width ="2";
            var draw_color="black";
        }
