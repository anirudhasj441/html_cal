function revNum(){
    n =Number(document.getElementById("num").value);
    var reverse = 0;
    var temp = n;
    while (temp>0){
        var a = temp % 10;
        reverse = Number((reverse * 10) + a);
        temp = parseInt(temp/10);
    }
    if (reverse == n ){
        alert("number is palindrome");
    }
    document.getElementById("rev").value = reverse;
    // console.log(reverse);
}