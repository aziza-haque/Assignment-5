function getInputElementValueById(inputElementId){
    const inputElement=document.getElementById(inputElementId);
    const inputElementString= inputElement.value;
    const  inputValue=parseFloat(inputElementString);
    inputElement.value= '';
    return inputValue;
}

function setTextElementValueById(elementId,newValue){
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue.toFixed(2);
}

