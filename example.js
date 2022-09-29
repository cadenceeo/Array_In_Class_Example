const names = new Array('Louis', 'Roger', 'Frank');
const myName = prompt("Enter the name you would like to check: ");

function findName(){
    for( i = 0; i < names.length; i++) {
        if(myName === names[i]){
            console.log(true)
            break;
        }else{
            console.log(false)
        }
    }
}

findName();