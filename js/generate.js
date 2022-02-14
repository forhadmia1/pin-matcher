//variable is here
const value=document.getElementById('input-value');
const typedPin= document.getElementById('typed-Number');
//generate pin 
function getPin(){
    const pin= Math.round(Math.random()*10000);
    const pinvalue=pin+'';
    if(pinvalue.length<4){
        return getPin();
    }else{
        return pinvalue;
    }
}

//generate pin show here
document.getElementById('generate').addEventListener('click',function(){
    value.value=getPin();
})
//typed pin value and show here
document.getElementById('pin-numbers').addEventListener('click',function(event){
    const pin =event.target.innerText;
    if(isNaN(pin)){
        if(pin=='C'){
            typedPin.value= '';
        }else if(pin== "CE"){
            const pin =typedPin.value;
            const length=pin.length;
            let newPin='';
            for(let i=0;i<length-1;i++){
                newPin+=pin[i];
            }
            typedPin.value= newPin;
        }
    }else{
        let totalPin =typedPin.value+pin;
        typedPin.value= totalPin;
    }
})
//pin matching here 
document.getElementById('pin-match').addEventListener('click',function(){
    const generatepin= value.value;
    const typed= typedPin.value;
    const success=document.getElementById('success');
    const worng=document.getElementById('worng');
    if(generatepin==typed){
        success.style.display='block';
        worng.style.display='none';
    }else{
        worng.style.display='block';
        success.style.display='none';
    }
})