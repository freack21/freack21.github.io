var itr = 0;
var timer = 2;
var state = 1;
var maxState = 16;

window.onload =()=> {
    setInterval(update, 1000);
}

function update()
{
    itr++;
    if(itr > timer)
    {
        cd(state);
        if(state >= 14)
        {
            timer = 5;
        }
        if(state >= maxState)
        {
            state = maxState;
        }
        else{
            state++;
        }
        itr=0;
    }
}

function cd(st)
{
    var x = document.getElementById("c"+st);
    x.style.display="none";
    var y = st+1;
    x = document.getElementById("c"+y);
    x.style.display="block";
}
