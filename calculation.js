
document.getElementById('triangle-area').addEventListener('click',function(){
    const triangleInputB=getInputElementValueById('input-b');

    const triangleInputH=getInputElementValueById('input-h');

    const triangleArea=0.5*triangleInputB*triangleInputH;
    setTextElementValueById('tri',triangleArea);
    const triangle=document.getElementById('triangle');
    triangle.style.display='block';

})

document.getElementById('ellipse-area').addEventListener('click',function(){
    const triangleInputB=getInputElementValueById('input-a');

    const triangleInputH=getInputElementValueById('input-b3');

    const ellipseArea=3.142*triangleInputB*triangleInputH;
    setTextElementValueById('elli',ellipseArea);
    const ellipse=document.getElementById('ellipse');
    ellipse.style.display='block';

})
document.getElementById('rectangle-area').addEventListener('click',function(){
    const InputW=getInputElementValueById('input-w');

    const InputL=getInputElementValueById('input-l');

    const rectangleArea=InputW*InputL;
    setTextElementValueById('rec',rectangleArea);
    const rectangle=document.getElementById('rectangle');
    rectangle.style.display='block';

})
document.getElementById('parallelogram-area').addEventListener('click',function(){
    const InputW=getInputElementValueById('input-b1');

    const InputL=getInputElementValueById('input-h1');

    const parallelogramArea=InputW*InputL;
    setTextElementValueById('para',parallelogramArea);
    const parallelogram=document.getElementById('parallelogram');
    parallelogram.style.display='block';

})
document.getElementById('pentagon-area').addEventListener('click',function(){
    const InputW=getInputElementValueById('input-p');

    const InputL=getInputElementValueById('input-b2');

    const pentagonArea=InputW*InputL;
    setTextElementValueById('pent',pentagonArea);
    const pentagon=document.getElementById('pentagon');
    pentagon.style.display='block';

})
document.getElementById('rhombus-area').addEventListener('click',function(){
    const InputW=getInputElementValueById('input-e');

    const InputL=getInputElementValueById('input-f');

    const rhombusArea= 0.5*InputW*InputL;
    setTextElementValueById('rhom',rhombusArea);
    const rhombus=document.getElementById('rhombus');
    rhombus.style.display='block';

})
