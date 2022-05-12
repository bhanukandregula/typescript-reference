let reviews: number[] = [5,3,2,5,4,1,3];
let total: number = 0;
let average: number = 0;

for(let i=0; i< reviews.length; i++){
    total = total + reviews[i];
    console.log("Total of reviews: ", total);
}

average = total / reviews.length;
console.log("Average of reviews is: ", average);