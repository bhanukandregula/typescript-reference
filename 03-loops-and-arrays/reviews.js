var reviews = [5, 3, 2, 5, 4, 1, 3];
var total = 0;
var average = 0;
for (var i = 0; i < reviews.length; i++) {
    total = total + reviews[i];
    console.log("Total of reviews: ", total);
}
average = total / reviews.length;
console.log("Average of reviews is: ", average);
