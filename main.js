
document.getElementById("name__message").style.cssText = "display:none;";
document.getElementById("lastName__message").style.cssText = "display:none;";
document.getElementById("email__message").style.cssText = "display:none;";
document.getElementById("password__message").style.cssText = "display:none;";


document.getElementById("name__error").style.cssText = "display:none;";
document.getElementById("lastName__error").style.cssText = "display:none;";
document.getElementById("email__error").style.cssText = "display:none;";
document.getElementById("password__error").style.cssText = "display:none;";


function validation(){

    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    

    
    var regex__email =    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    



    
    if(name!=""){
        document.getElementById("name").style.cssText = "color: #3D3B48; ";
        document.getElementById("name__message").style.cssText = "display:none;";
        document.getElementById("name__error").style.cssText = "display:none;";
        
    }

    else{
        document.getElementById("name__message").style.cssText = "display:block;";
        document.getElementById("name__error").style.cssText = "display:block;";
        document.getElementById("name").style.cssText = "border-color:#FF7979; ";
        document.getElementById("name").placeholder = "";
    }

    if(lastName!=""){
        document.getElementById("lastName").style.cssText = "color: #3D3B48; ";
        document.getElementById("lastName__message").style.cssText = "display:none;";
        document.getElementById("lastName__error").style.cssText = "display:none;";
        
    }

    else{
        document.getElementById("lastName__message").style.cssText = "display:block;";
        document.getElementById("lastName__error").style.cssText = "display:block;";
        document.getElementById("lastName").style.cssText = "border-color:#FF7979; ";
        document.getElementById("lastName").placeholder = "";
    }
   


    if(regex__email.test(email)){
        document.getElementById("email__message").style.cssText = "display:none;";
        document.getElementById("email__error").style.cssText = "display:none;";
        document.getElementById("email").style.cssText = "color: #3D3B48; border-color: #bab7d4c9; ";

    }

    else{
        document.getElementById("email__message").style.cssText = "display:block;";
        document.getElementById("email__error").style.cssText = "display:block;";
        document.getElementById("email").style.cssText = "border-color:#FF7979;color:#FF7979; ";
        document.getElementById("email").placeholder = "";

    }


    
    if(password!=""){
        document.getElementById("password").style.cssText = "color: #3D3B48; ";
        document.getElementById("password__message").style.cssText = "display:none;";
        document.getElementById("password__error").style.cssText = "display:none;";
    }

    else{
        document.getElementById("password__message").style.cssText = "display:block;";
        document.getElementById("password__error").style.cssText = "display:block;";
        document.getElementById("password").style.cssText = "border-color:#FF7979; ";
        document.getElementById("password").placeholder = "";
    }
    

}
