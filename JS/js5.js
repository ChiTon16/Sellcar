var InputString1 = document.getElementById("Inputfirst");
var InputString2 = document.getElementById("Inputsecond");

function MaHoa() {
    var InputString1_work = InputString1.value;
    var arr = [];

    for (var i = 0; i < InputString1_work.length; i++)
{
    arr.push(InputString1_work.charCodeAt(i));
    if (arr[i] != 32 && arr[i]!=90 && arr[i] !=122 && arr[i] != 57)
    arr[i]++;
    else
    if (arr[i]==90 || arr[i] ==122)
    arr[i] = arr[i] - 25;
    else
    if (arr[i]== 57)
    arr[i] = arr[i] - 9;
}

for (var i=0; i < arr.length; i++)
{
    arr[i] = String.fromCharCode(arr[i]);
}

InputString2.value = arr.join("");
}

function GiaiMa() {
    var InputString2_work = InputString2.value;
    var arr = [];

    for (var i = 0; i < InputString2_work.length; i++)
{
    arr.push(InputString2_work.charCodeAt(i));
    if (arr[i] != 32 && arr[i]!=65 && arr[i] !=97 && arr[i] != 48)
    arr[i]--;
    else
    if (arr[i]==65 || arr[i] ==97)
    arr[i] = arr[i] + 25;
    else
    if (arr[i]== 48)
    arr[i] = arr[i] + 9;
}

for (var i=0; i < arr.length; i++)
{
    arr[i] = String.fromCharCode(arr[i]);
}

InputString1.value = arr.join("");
}