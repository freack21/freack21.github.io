
var gr = document.getElementById('canvas');
var g = gr.getContext('2d');

window.onload = ()=> {
    show();
}

function show()
{
    setInterval(paint, 1000/30);
}

var t0 = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,
    0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,
    0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,
    0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,
    0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,
    0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,
    0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];

var state = 0, it = 0;

function paint()
{
    g.beginPath();
    g.fillStyle = "silver";
    g.fillRect(0,0,gr.width,gr.height);
    g.beginPath();
    g.strokeStyle = "gray";
    g.rect(0,0,gr.width,gr.height);
    g.lineWidth = "4";
    g.stroke();
    switch(state)
    {
        case 0:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "30px calibri";
            g.fillText("Halo, Sasaaaa....", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 50)
            {
                it = 0;
                state = 1;
            }
        break;
        case 1:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "30px calibri";
            g.fillText("Lagi ngapain itu?", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 2;
            }
        break;
        case 2:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "25px calibri";
            g.fillText("Jangan ngelamun muluuu..", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 3;
            }
        break;
        case 3:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "30px calibri";
            g.fillText("Eh, kamu tau ga?", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 4;
            }
        break;
        case 4:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "30px calibri";
            g.fillText("Gatau ya? Atau lupa?", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 5;
            }
        break;
        case 5:
            for(var i=0;i<t0.length;i++)
            {
                var j = Math.floor(i/16);
                var k = i%16;
                if(t0[i] == 1)
                {
                    g.beginPath();
                    g.fillStyle ="black";
                    g.strokeStyle="silver";	g.rect(k*20,j*20,20,20);
                    g.fill();g.stroke();
    
                }
            }
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 6;
            }
        break;
        case 6:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "30px calibri";
            g.fillText("Udah tau?", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 7;
            }
        break;
        case 7:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "30px calibri";
            g.fillText("Ha? Belomm?", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 8;
            }
        break;
        case 8:
            for(var i=0;i<t0.length;i++)
            {
                var j = Math.floor(i/16);
                var k = i%16;
                if(t0[i] == 1)
                {
                    g.beginPath();
                    g.fillStyle ="black";
                    g.strokeStyle="silver";	g.rect(k*20,j*20,20,20);
                    g.fill();g.stroke();
    
                }
            }
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 9;
            }
        break;
        case 9:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "25px calibri";
            g.fillText("Abang sayang kamuuuu..", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 10;
            }
        break;
        case 10:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "25px calibri";
            g.fillText("Hari ini...", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 50)
            {
                it = 0;
                state = 11;
            }
        break;
        case 11:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "25px calibri";
            g.fillText("Selasa, 06-09-22..", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 12;
            }
        break;
        case 12:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "20px calibri";
            g.fillText("HAPPY ANNIVERSARY SAYANGG!!", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 13;
            }
        break;
        case 13:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "30px calibri";
            g.fillText("Happy terus yaa...", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 14;
            }
        break;
        case 14:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "25px calibri";
            g.fillText("Semoga kita terus kuat..", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 15;
            }
        break;
        case 15:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "30px calibri";
            g.fillText("Be Better Us...", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 16;
            }
        break;
        case 16:
            g.beginPath();
            g.fillStyle = "black";
            g.fillRect(0,0,gr.width,60);
            g.fillRect(0,200-30,gr.width,60);
            g.beginPath();
            g.fillStyle = "black";
            g.font = "30px calibri";
            g.fillText("Once again...", 10, 120)
            setTimeout(it++, 1000/60);
            if(it >= 100)
            {
                it = 0;
                state = 17;
            }
        break;
        case 17:
            for(var i=0;i<t0.length;i++)
            {
                var j = Math.floor(i/16);
                var k = i%16;
                if(t0[i] == 1)
                {
                    g.beginPath();
                    g.fillStyle ="black";
                    g.strokeStyle="silver";	g.rect(k*20,j*20,20,20);
                    g.fill();g.stroke();
    
                }
            }
        break;
    }
}