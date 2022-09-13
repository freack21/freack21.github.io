var itr = 0;
var state = 1;

window.onload =()=> {
    setInterval(update, 1000);
}

function update()
{
    itr++;
    if(itr > 3)
    {
        cd(state);
        if(state >= 2)
        {
            state=2;
        }
        else
        {
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
