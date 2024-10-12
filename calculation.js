
document.getElementById('triangle-area').addEventListener('click',function(){
    const triangleInputB=getInputElementValueById('input-b');

    const triangleInputH=getInputElementValueById('input-h');

    const triangleArea=0.5*triangleInputB*triangleInputH;
    setTextElementValueById('tri',triangleArea);

})

document.getElementById('ellipse-area').addEventListener('click',function(){
    const triangleInputB=getInputElementValueById('input-a');

    const triangleInputH=getInputElementValueById('input-b3');

    const ellipseArea=3.142*triangleInputB*triangleInputH;
    setTextElementValueById('elli',ellipseArea);

})
document.getElementById('rectangle-area').addEventListener('click',function(){
    const InputW=getInputElementValueById('input-w');

    const InputL=getInputElementValueById('input-l');

    const rectangleArea=InputW*InputL;
    setTextElementValueById('rec',rectangleArea);

})
document.getElementById('parallelogram-area').addEventListener('click',function(){
    const InputW=getInputElementValueById('input-b1');

    const InputL=getInputElementValueById('input-h1');

    const parallelogramArea=InputW*InputL;
    setTextElementValueById('para',parallelogramArea);

})
document.getElementById('pentagon-area').addEventListener('click',function(){
    const InputW=getInputElementValueById('input-p');

    const InputL=getInputElementValueById('input-b2');

    const pentagonArea=InputW*InputL;
    setTextElementValueById('pent',pentagonArea);

})
document.getElementById('rhombus-area').addEventListener('click',function(){
    const InputW=getInputElementValueById('input-e');

    const InputL=getInputElementValueById('input-f');

    const rhombusArea= 0.5*InputW*InputL;
    setTextElementValueById('rhom',rhombusArea);

})
