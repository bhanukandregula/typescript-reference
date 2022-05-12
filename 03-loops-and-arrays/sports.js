var sportsOne = ["Badminton", "Cricket", "Golf", "Tennis"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
// Below is an example for simplified foor loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " << my fav!!!");
    }
    else {
        console.log(tempSport);
    }
}
