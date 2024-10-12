
document.getElementById('triangle-area').addEventListener('click',function(){
    const triangleInputB=getInputElementValueById('input-b');

    const triangleInputH=getInputElementValueById('input-h');

    const triangleArea=0.5*triangleInputB*triangleInputH;
    console.log(triangleArea);

})
