function ValidateForm(){
    var x=document.myform.name.value;
    if(x==" "){
    alert("Name must be Filled Out ")
    return false;
    };
    }