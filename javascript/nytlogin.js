function Opret_bruger() { 
    var mymesseger = "";
    var s = document.getElementById("Snavn").value;
    var u = document.getElementById("Ukodeord").value;
    var p = document.getElementById("Pkodeord").value;
    var e = document.getElementById("Email").value;
    var r = document.getElementById("Rmail").value;
    if(s == ""){
        mymesseger = "navn mangler";
    }
    if(u !== p || u == "" || p == ""){
        if(mymesseger == ""){
            mymesseger = "kodeord mangler eller forkert";
        }else{
            mymesseger += ", kodeord mangler";
        }
    }
    if(e !== r || e == "" || r == ""){
        if(mymesseger == ""){
            mymesseger = "mail mangler eller forkert";
        }else{
            mymesseger += ", mail mangler";
        }
    }
    if(mymesseger !== ""){
        alert(mymesseger);
    }else{
        alert("velkommen til Veteranbilkluben" + s);
    }
}