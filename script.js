document.getElementById("screen").innerHTML = "0";

function removeZero()
{
    var value = document.getElementById("screen").innerHTML;
    if(value=="0")
    {
        value = " ";
        document.getElementById("screen").innerHTML = value;
    }
}

function perc()
{
    removeZero();
    var value = document.getElementById("screen").innerHTML;
    var percent = value/100;
    document.getElementById('screen').innerHTML = percent;
}

function del()
{
    removeZero();
    var space = " ";
    document.getElementById("screen").innerHTML=space;
}

function fordisplay(value)
{
    removeZero();
    document.getElementById('screen').innerHTML+=value;
}

function showResult()
{
    removeZero();
    var operation = document.getElementById('screen').innerHTML;
    var result = eval(operation);
    document.getElementById('screen').innerHTML = result;
}