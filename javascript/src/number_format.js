/*
Format any integer provided into a string with "," (commas) in the correct places.
*/

const DECIMALS = 3;

const number_format = number => {
    return number.toLocaleString(); // number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(number_format(100000));