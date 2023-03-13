// Name : Gaurish Bhatia
// Student ID : 2110994762
// remarks : This is the script file that is already included in the smart-car.html file.


//These are the global constants for the different buttons and sliders.
const Button_state = $('#Button_state');
const car_state=$('#carstate');
const Air_Conditioner=$('#AC_button');
const Air_Conditioner_State=$('#AC_state');
const Infotainment = $('#Infotainment');
const volume= $('#Infotainment_value');
const Lights = $('#light_Button_state');
const LightState=$('#lightstate');
const Air_conditioner_temp=$('#AC_temperature');
const AC_val=$('#AC_value');


//This is the click handler for turning the car on or off.
Button_state.on('click', function Car_Switch() {
  if (Button_state.text() === 'ON') { 
    Button_state.text('OFF');
    car_state.text('Car is On');
    
  } else {
    Button_state.text('ON');
    car_state.text('Car is OFF');
    
  }
});

// This is the input handler for the slider of volume.
Infotainment.on('input', function set_volume() {
  vol = Infotainment.val();
  volume.text(`Infotainment Volume : ${vol}`);

});


// This is the click handler for turning the lights on or off.
Lights.on('click', function Light(){
    if(Lights.text()=='Turn ON')
    {
        Lights.text('Turn OFF');
        LightState.text('Lights are ON');
        
    }
    else{
        Lights.text('Turn ON');
        LightState.text('Lights are OFF');
    }

});

//This is the click handler for turning the Air conditioner on or off.
Air_Conditioner.on('click', function AC(){
    if(Air_Conditioner.text()=='Turn ON AC')
    {
        Air_Conditioner.text('Turn OFF AC');
        Air_Conditioner_State.text('Air Conditioning is ON.');
        Air_conditioner_temp.val(24);
        AC_val.text(`Air conditioning Temperature : 24 degrees`);
        
        
    }
    else{
        Air_Conditioner.text('Turn ON AC');
        Air_Conditioner_State.text('Air Conditioning is OFF');
        Air_conditioner_temp.val(0);
        AC_val.text(`Air conditioning Temperature : OFF `);
    }

});


//This is the input handler for setting the temperature.
Air_conditioner_temp.on('input', function temperature_set() {
  temper = Air_conditioner_temp.val();
  AC_val.text(`Air conditioning Temperature :${temper} degrees`);
  
  
});