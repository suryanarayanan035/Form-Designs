$(document).ready(function()
{
    $("#check").css("display","none");
    $("#save").click(show);
    function show()
    {
        var name=$("#name").val();
        var mobileNo=$("#mobileNo").val();
        var emailId=$("#emailId").val();
        var password=$("#password").val();
        var streetLine1=$("#streetLine1").val();
        var streetLine2=$("#streetLine2").val();
        var locality=$("#locality").val();
        var city=$("#city").val();
        var pinCode=$("#pinCode").val();
        var html="Name:"+name+"<br>MobileNo:"+mobileNo+"<br>EmailId:"+emailId+"<br>Password:"+password+"<br>StreetLine1:"+streetLine1+"<br>StreetLine2:"+streetLine2+"<br>Locality:"+locality+"<br>city:"+city+"<br>pinCode:"+pinCode;
       var btn= "<br><br><button id='editBtn'>Edit</button> <input type='submit' id='submitBtn' />";
        $("#check").html(html+btn);
       $("#check").css("display","inline");
       $("#Container").css("display","none");
       $("#save").css("display","none");
        
    }
    $(document).on("click","#submitBtn",function()
    {
        $("form").submit();
    });
    $(document).on("click","#editBtn",function(){
        $("#check").css("display","none");
        $("#Container").css("display","inline");
        $("#save").css("display","inline");
    });
});