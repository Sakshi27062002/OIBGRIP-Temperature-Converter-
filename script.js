const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    //console.log(num);
    const tempSelected = document.getElementById('temdiff');
    const valueTemp = temdiff.options[tempSelected.selectedIndex].value;
    
    const celtofah = (cel) => {
        let fahrenheit = Math.round(cel*9/5)+32;
        return fahrenheit;
    }
    
    const fahtocel = (fah) => {
        let celsius = Math.round(fah-32)*5/9;
        return celsius;
    }
    
    let result;

    if(valueTemp =='cel'){
        result = celtofah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result}°Fahrenheit`;
    }
    else{
        result = fahtocel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result}°Celsius`;
    }
}