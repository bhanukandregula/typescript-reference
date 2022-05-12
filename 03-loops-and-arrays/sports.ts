let sportsOne: string[] = ["Badminton", "Cricket", "Golf", "Tennis"];

for(let i=0; i < sportsOne.length; i++){
    console.log(sportsOne[i]);
}

// Below is an example for simplified foor loop
for(let tempSport of sportsOne){
    if(tempSport == "Cricket"){
        console.log(tempSport + " << my fav!!!")
    }else{
        console.log(tempSport);
    }
}

