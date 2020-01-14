$(document).ready(function(){
    var customerIdExp=/^[a-z A-Z][a-z A-Z 0-9]{7,20}$/;
    var nameExp=/^([a-z A-Z])([a-z A-Z]{4,20})$/;
    var mobileNoExp=/^([0-9])([0-9]{9})$/;
    var emailIdExp=/^([a-z A-Z 0-9 \. -]{2,20})@([a-z A-Z 0-9 -]{2,8})\.([a-z]){2,8}(\.[a-z A-Z]{2,20})?$/;
    var passwordExp=/[a-z A-Z][a-z A-Z 0-9 \. - _ $ !]{7,20}$/;
    function customerIdValidate()
    {
        var customerId=$("#customerId").val();
       if($.trim(customerId)=="")
        {
            alert("CustomerId cannot be null");
            return false;
        }
        
            if(customerIdExp.test(customerId))
            {
                $("#customerId").css("background-color","lightgreen");
                return true;
            }
            else{
                $("#customerId").css("background-color","red");
                return false;
            }

     
    }
    function nameValidate()
    {
        var name=$("#name").val()
        if($.trim(name)=="")
        {
            alert("Name cannot be null");
            return false;
        }
       
            if(nameExp.test(name))
            {
                $("#name").css("background-color","lightgreen");
                return true;
            }
            else{
                $("#name").css("background-color","red");
                return false;
            }

   
    }
    function mobileNoValidate()
    {
        var mobileNo=$("#mobileNo").val()
        if($.trim(mobileNo)=="")
        {
            alert("MobileNo cannot be null");
            return false;
        }
       
            if(mobileNoExp.test(mobileNo))
            {
                $("#mobileNo").css("background-color","lightgreen");
                return true;
            }
            else
            {
                $("#mobileNo").css("background-color","red");
                return false;
            }

        
        
    }
    function emailIdValidate()
    {
        var emailId=$("#emailId").val()
        if($.trim(emailId)=="")
        {
            alert("EmailId cannot be null");
            return false;
        }
        
            if(emailIdExp.test(emailId))
            {
                $("#emailId").css("background-color","lightgreen");
                return true;
            }
            else{
                $("#emailId").css("background-color","red");
                return false;
            }
           

      
    }
    function passwordValidate()
    {
        var password=$("#password").val()
        if($.trim(password)=="")
        {
            alert("password cannot be null");
            return false;
        }
            if(passwordExp.test(password))
            {
                $("#password").css("background-color","lightgreen");
                return true;
            }
            else
            {
                $("#password").css("background-color","red");
                return false;
            }

        
       
    }
    $("#customerId").blur(customerIdValidate);
    $("#name").blur(nameValidate);
    $("#mobileNo").blur(mobileNoValidate);
    $("#emailId").blur(emailIdValidate);
    $("#password").blur(passwordValidate);
    function validate()
    {
        var r1=customerIdValidate();
        var r2=nameValidate();
        var r3=mobileNoIdValidate();
        var r4=emailIdValidate();
        var r5=passwordIdValidate();
        var r=r1&&r2&&r3&&r4&&r5;
        return r;
    }
    $("form").submit(validate);
});