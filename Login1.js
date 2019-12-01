$(document).ready(function()
{
   $("#userInstruction").hide();
   $("#passwordInstruction").hide();
   $("#contents").hide();

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
   $("#links").hover(menuSlideDown,menuSlideUp);
   function menuSlideDown(){
       $("#contents").slideDown(500);
   }
   function menuSlideUp(){
    $("#contents").slideUp(500);
}
});