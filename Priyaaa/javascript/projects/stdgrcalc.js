function calculate(){
    let acc = document.getElementById("acc").value; 
    let com = document.getElementById("com").value; 
    let eng = document.getElementById("eng").value; 
    let math = document.getElementById("math").value; 

    let total = parseFloat(acc) + parseFloat(com) + parseFloat(eng) + parseFloat(math);
    document.getElementById("demo").innerHTML = `Your total number is ${total}`;

    const per = (total/500)*100;
    document.getElementById("demo1").innerHTML = `Your total percentage is ${per}`;


}