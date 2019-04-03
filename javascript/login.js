function loget_ind() {
    //alert("jeg virker");
    var s = document.getElementById("myBrugernavn").value;
    var f = document.getElementById("myKodeord").value;
    if(s == "ak19" || f == "admin123"){
        alert("velkommen " + s);
    }
    else{
        alert("Du har enden ikke indtast dit brugernavn eller kodeord rigtigt.");
    }
}