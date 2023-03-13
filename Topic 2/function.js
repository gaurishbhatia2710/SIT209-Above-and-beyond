// Name : Gaurish Bhatia
// Student ID : 2110994762
// Remarks : This is the script file for the light_color.html file.

// function for selecting the device and changing the colour of light.
function change(){
let device = $("#Light_ID").val(); // getting the value at the Light_ID
let color = $("#change").val(); // getting the value of the change ID.
$("#" + device).css("background-color", color);// function for changing the light colour at the mentioned device.


}