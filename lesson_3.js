// Задание №1
console.log('Задание №1');
let j = 2; 
while (j !== 100) {
    if ( j === 2 || j === 3 || j === 5 || j === 7 ) {
        console.log(j);
    } else if ( j % 2 !== 0 && j % 3 !== 0 ) {
        if ( j % 5 !== 0 && j % 7 !== 0 ) {
            console.log(j);
        }
    }
    j++;
}


//Задание №2 и №3
console.log('Задание №2 и №3');
function countBasketPrice(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

let priceProduct = [132, 223, 235, 454, 4545];
countBasketPrice(priceProduct);



// Задание №4
console.log('Задание №3');
for (let i = 0; i <= 9; console.log(i++)) {

}


// Задание №5
console.log('Задание №4');
let n = 'x';
let count = '';
for (let i = 1; i <= 20; i++) {
    count += n;
    console.log(count);
}

