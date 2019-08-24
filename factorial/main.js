function factNum(){
    var n = Number(document.getElementById("num").value);
    var f = 1;
    for(var i = n ; i > 0 ; i--){
        f = f*i;
    }
    document.getElementById("fact").value = f;
}