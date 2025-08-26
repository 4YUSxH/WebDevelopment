function clicker() {
    let a = 0;
    return function(){
        if(a<5){
            a++;
            console.log(a);
        }
        else
            console.log("Limit End");       
    }
}

let fnc = clicker();
fnc();
fnc();
fnc();
fnc();
fnc();
fnc();

a = 10; //Cant do this a is private variable and this is another 'a' global variable 
fnc(); // Stil print "Limit End"
fnc(); // Stil print "Limit End"