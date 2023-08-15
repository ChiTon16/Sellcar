var number = document.querySelectorAll(".number-item");
var numberColor = document.querySelector(".Number-list")
var namecolors = document.getElementById("color-active");
var buttonEle = document.getElementById("button-on");
var Score = document.querySelector(".score-input");
var SelectEle = document.querySelectorAll(".chonso");
var arr = new Array(3);
var i=0;

namecolors.onchange = () => {
    numberColor.style.color = `${namecolors.value}`;
}

const RandomNum = () => {
    for (i=0; i<3; i++)
    {
        arr[i] = Math.ceil(Math.random() * 6);
    }
}

const Tong = () => {
    var Tong=0;
    for (i=0;i<3;i++)
    {
        Tong += arr[i];
    }
    return Tong;
}

function CheckTai() {
    var tongcheck= Tong();
    if (tongcheck>=11 && tongcheck<=18)
    return true;
return false;
}

function CheckXiu() {
    var tongcheck= Tong();
    if (tongcheck>=3 && tongcheck<=10)
    return true;
return false;
}



SelectEle.forEach(item => {
    item.onfocus = (e) => {
        item.classList.add("active");
        SelectEle.forEach(item2 => {
            if (item !== item2) item2.classList.remove("active");
        });
    }
});

buttonEle.onclick = (e) => {
    RandomNum();
    number.forEach(function(item, i) {
        item.innerHTML= `${arr[i]}`;
    });

    var Select = Number(document.querySelector(".chonso.active").value);
    var check;
    if (Select > 0)
    {
        check=CheckTai();
    }
    else  check = CheckXiu();
    if (check == true)
    {
        var result = parseInt(Score.innerHTML);
        var temp=Tong();
        result += temp;
        Score.innerHTML = `${result}`;
    }
    else
    {
        var result = parseInt(Score.innerHTML);
        var temp=Tong();
        result -= temp;
        Score.innerHTML = `${result}`;
    }
} 