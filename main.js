const inputDate = document.getElementById("inputDate");
const calculateButton = document.getElementById("calculateButton");
const result = document.getElementById("result");

var getStringAge = function(_inputYear){
    var res = String(_inputYear);
    var lastNum = Number(res[res.length-1]);
    if(lastNum==0 || lastNum>=5){
        return "лет";
    }
    else if(lastNum==1){
        return "год";
    }
    else{
        return "года";
    }
}

var getAge = function(_inputDate){
    var _inputTime = new Date(_inputDate);
    var res = new Date(new Date().getTime() - _inputTime.getTime()).getFullYear() - 1970;
    return "На сегодняшний день вам " + res + " " + getStringAge(res);
}

calculateButton.addEventListener('click', () => {
    if(!inputDate.value){
        alert('Пожалуйста, заполните все поля');
        return;
    }
    if(new Date(inputDate.value).getTime()>=new Date().getTime()){
        alert('Похоже, вы ещё не родились :<');
        return;
    }
    result.innerText = getAge(inputDate.value);
})