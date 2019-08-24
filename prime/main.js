function isPrime(num) {
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
        else {
            return true;
        }

    }
}
// console.log(msg);
function primeNum() {
    var n = document.getElementById("num").value;
    if (n == 1) {
        var msg = "not prime not complex";
    }
    else {
        var p = isPrime(n);
        if (p == true) {
            var msg = "prime";
        }
        else {
            var msg = "not prime";
        }
    }
    document.getElementById('prime').value = msg;
}

