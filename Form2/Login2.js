$(document).ready(function() {
    var uplaceholder;
    var pplaceholder;
    $("#username").focus(function()
    {
        uplaceholder= $("#username").attr("placeholder");
        $("#username").attr("placeholder","");
    });
    $("#username").blur(function()
    {
        $("#username").attr("placeholder",uplaceholder);
    });
    $("#password").focus(function()
    {
        pplaceholder= $("#password").attr("placeholder");
        $("#password").attr("placeholder","");
    });
    $("#password").blur(function()
    {
        $("#password").attr("placeholder",pplaceholder);
    });
    $("submit").hover();
    
});