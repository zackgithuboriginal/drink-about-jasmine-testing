let whatCanIDrink = function(age){
    if(typeof(age)==="number"){
        if(age<0) {
            return("Sorry. I can't tell what drink because that age is incorrect!");
        } else if(age<14 && age>=0) {
            return("Drink Toddy");
        } else if(age<18 && age>=14) {
            return("Drink Coke");
        } else if(age<21 && age>=18) {
            return("Drink Beer");
        } else if(age<130 && age>=21) {
            return("Drink Whiskey");
        };
    } else {
        return("Error")
    }
}