const wrapper = document.querySelector(".wrapper")
var qrInput=wrapper.querySelector(".form input")
var generateBtn = wrapper.querySelector(".form button")
var qrImg=wrapper.querySelector(".qr-code img")

let preValue;

generateBtn.addEventListener("click",()=>{
    let qrValue=qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue=qrValue;
    generateBtn.innerHTML ="Generating QR Code.......";
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active");
        generateBtn.innerHTML="Generate QR Code";
    });
});
qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value.trim()){
        wrapper.classList.remove("active");
        preValue="";
    }
});