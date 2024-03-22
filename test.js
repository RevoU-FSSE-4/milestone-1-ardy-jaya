function classifyNumber(number) {
    if (number === 10) {
        return "equal sum";
    }
    else if (number > 10) {
        return "Large Sum";
    } else  {
        return "Small sum";
    }

}
console.log(classifyNumber(10))