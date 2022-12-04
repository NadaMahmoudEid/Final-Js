var player1 ;
var player2;
document.querySelector(".control-buttons span").onclick = function () {

player1 = prompt("Player one Name.");
player2 = prompt("Player one Name.");  
document.querySelector(".info-container span").innerHTML += " "+ player1;
document.querySelector(".info-container2 span").innerHTML += " "+ player2;
  
  document.querySelector(".control-buttons").remove();

};



// Draw function
function checkdrow()
{
    for(var i=1;i<10;i++)
    {
        if(squars[i])
        { 
            if(i==9)
            {
                setInterval(function(){
                    dashboard.innerHTML = 'DRAW';},1000);
                    setTimeout(function(){
                    location.reload()},3000)
            }
        }
        else
        {
            break;
        }
    }
}


// variablSe to get the dashboard element
var dashboard = document.querySelector('.board');

// variable to define the turn
var turn = 'x';

//function to end 

function end( num1 , num2 , num3){

    dashboard.innerHTML = `${squars[num1]} winner`;
    document.getElementById('item'+num1).style.backgroundColor = 'black';
    document.getElementById('item'+num2).style.backgroundColor = 'black';
    document.getElementById('item'+num3).style.backgroundColor = 'black';
    setInterval(function(){
    dashboard.innerHTML += '.';},1000);
    setTimeout(function(){
    location.reload()},3000)
}


// array to store squars on it
var squars =[];

//function to check winner or not

function winner(){
    
    for(var i = 1 ; i < 10 ; i ++ )
    {
        squars[i] = document.getElementById('item'+i).innerHTML;
        
    }

    if( squars[1] == squars[2] && squars[2] == squars[3] && squars[1] != '' )
    {
      
        end(1,2,3);
    }
    else if( squars[4] == squars[5] && squars[5] == squars[6] && squars[5] != '' )
    {
        end(4,5,6);
    }
    else if( squars[7] == squars[8] && squars[8] == squars[9] && squars[8] != '' )
    {
        end(7,8,9);
    }


    else if( squars[1] == squars[4] && squars[4] == squars[7] && squars[1] != '' )
    {
        end(1,4,7);
    }
    else if( squars[2] == squars[5] && squars[5] == squars[8] && squars[5] != '' )
    {
        end(2,5,8);
    }
    else if( squars[3] == squars[6] && squars[6] == squars[9] && squars[6] != '' )
    {
        end(3,6,9);
    }


    else if( squars[1] == squars[5] && squars[5] == squars[9] && squars[5] != '' )
    {
        end(1,5,9);
    }
    else if( squars[3] == squars[5] && squars[5] == squars[7] && squars[5] != '' )
    {
        end(3,5,7);
    }
    else
    {
        checkdrow();
    }
    

}


// function to draw X or O in sqare and finally call finction check
function game(id){
    var element = document.getElementById(id)
    if( turn == 'x' && element.innerHTML == '')
    {
        element.innerHTML=turn;
        turn = 'o';
        dashboard.innerHTML='O';
    }
    else if(turn == 'o' && element.innerHTML == '')
    {
        element.innerHTML=turn;
        turn = 'x';
        dashboard.innerHTML='X';
    }
    winner()
}