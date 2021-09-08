function runEverythin() {
    

    var myname = "Whitney";
    console.log (myname)

    const numberOfStates = 50;
    console.log(numberOfStates)

    var add = (5 + 4);
    console.log(add)
    // This is the sum of two numbers

    //Salutations to the world
    function sayHello() {
   alert("Hello World");
    }

    sayHello();

    // checking age for access
    function checkAge (name, age){
        if (age <21) {
            alert("Sorry" +" "+ name + " " +"You are not old enough to view this page!");
        }
       
    }

    checkAge("Charles", 21);
    checkAge("Abby", 27);
    checkAge("James", 18);
    checkAge("John", 17);


    // my favorite veggies
    var favVeggies = ["Carrots" , "Bok Choy" , "Cucumbers" , "Leeks"];
    for (i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);


    //list veggies
    }
    console.log(favVeggies);


    var Pet = { 
        name = "Pepper",
        breed = "Yorkie",
    }
    console.log(pet)

        

    var people = [
       { 
          name:
          age: 
         }
         { 
            name:
            age: 
           }
           { 
            name:
            age: 
           }
         
        
    ]


}
runEverythin();