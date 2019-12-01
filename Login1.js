$(document).ready(function()
{
   $("#userInstruction").hide();
   $("#passwordInstruction").hide();

   $("#username").focus(function()
   {
       
       $("#userInstruction").slideDown(500);
   });
   $("#username").blur(function()
   {
       $("#userInstruction").slideUp(500);
   });
   $("#password").focus(function()
   {
       
       $("#passwordInstruction").slideDown(500);
   });
   $("#password").blur(function()
   {
       $("#passwordInstruction").slideUp(500);
   });
});