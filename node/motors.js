var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var servo = new five.Servo(3);
  var proximity = new five.Proximity({
    controller: "HCSR04",
    pin: "A4",
    freq: 1
  });
  var motors = new five.Motors([9, 10, 11]);

  proximity.on("data", function() {
    if (this.cm > 0) {
      console.log("Proximity: ");
      console.log("  cm  : ", this.cm);
      console.log("  in  : ", this.in);
      console.log("-----------------");
    }
  });

  proximity.on("change", function() {
    console.log("The obstruction has moved.");
  });
  // this.repl.inject({
  //   servo: servo
  // });
  var led = new five.Led(13);
  led.blink(500);
  motors.forward(100);
  // servo.sweep();
});