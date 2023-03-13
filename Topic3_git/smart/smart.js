
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



Button_state.on('click', function Car_Switch() {
  if (Button_state.text() === 'ON') { 
    Button_state.text('OFF');
    car_state.text('Car is On');
    
  } else {
    Button_state.text('ON');
    car_state.text('Car is OFF');
    
  }
});

Infotainment.on('input', function set_volume() {
  vol = Infotainment.val();
  volume.text(`Infotainment Volume : ${vol}`);

});

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

Air_conditioner_temp.on('input', function temperature_set() {
  temper = Air_conditioner_temp.val();
  AC_val.text(`Air conditioning Temperature :${temper} degrees`);
  
  
});