function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    console.log(num);
}

pad(5,4);