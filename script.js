var itr = 0;
var timer = 5;
var state = 1;
var maxState = 14;
document.getElementById('song').play();

window.onload =()=> {
    document.getElementById('song').play();
    setInterval(update, 1000);
}

function update()
{
    document.getElementById('song').play();
    itr++;
    if(itr > timer)
    {
        cd(state);
        if(state >= 11)
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
