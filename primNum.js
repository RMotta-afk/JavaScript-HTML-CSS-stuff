const main = (params) => {
    const vect = feedVect();
    const sum = sumVect(vect);
    return sum;
}
const primeNum = number => {
    for(let num = 2, sqr = Math.sqrt(number); num <= sqr; num++)
        if(number % num == 0) return false;
    return number > 1;
}
const sumVect = vect => {
    return vect.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    });
}
const feedVect = () => {
    let index = 1,
        vect = [];
    while (index <= 1000){
        if (primeNum(index)) vect.push(index);
        index ++;
    }
    return vect; 
}
