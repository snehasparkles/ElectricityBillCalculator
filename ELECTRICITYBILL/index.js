

function billcalculator(event){
    event.preventDefault();
    var prev = document.getElementById("previousunits").value;
    var current = document.getElementById("currentunits").value;
    var result = document.getElementById("result")
    if((prev === "") || (current === "")){
        alert("please Enter Value !!!")
        document.getElementById("previousunits").value = "";
        document.getElementById("currentunits").value = "";
        return
    }
    if((prev < 0) || (current < 0)){
        alert("please enter positive values")
        document.getElementById("previousunits").value = "";
        return
        
    }

    if (prev > current){
        alert("current units should be greater than previous units")
        document.getElementById("previousunits").value = "";
        document.getElementById("currentunits").value = "";
        
    }
    else{
        
    var actualunit = current - prev
    var price = Math.round(actualunit * 6)
    result.innerHTML = `Electricity Bill  </br>
    previous month units =  </br> ${prev} units </br>
    current month units =  </br> ${current} units </br>
    units used this month =  </br> ${actualunit} units</br>
    1 unit = RS.6 </br>
    so, ${actualunit}*6 =  </br> ${price}</br>
    You need to pay <b> Rs. ${price} </b>for this month </br>`
    document.getElementById("previousunits").value = "";
    document.getElementById("currentunits").value = "";
    }



}