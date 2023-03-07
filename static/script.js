wrapper=document.querySelector(".wrapper");
success_msg=wrapper.querySelector('.success-msg');
alt_msg=wrapper.querySelector('.alert-msg');
spanTxt=wrapper.querySelector('.form .input-box .input-text');
function validate(){
    var errorTxt=wrapper.querySelector('.form  input').value;
    if(errorTxt==''){
        alt_msg.classList.add('active');
        success_msg.classList.remove('active');
        setTimeout(()=>{alt_msg.classList.remove('active');},5000);
    }
    else{
        alt_msg.classList.remove('active');
        success_msg.classList.add('active');
        setTimeout(()=>{success_msg.classList.remove('active');},5000);
    }
}