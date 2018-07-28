#define LED 13
bool state = true;
char getstr;

void stateChange(){
  state = !state;
  digitalWrite(LED, state);
}

void setup() { 
  Serial.begin(9600);
  pinMode(LED, OUTPUT); 
}

void loop() { 
  getstr = Serial.read();
  switch(getstr){
    case 'b': 
      digitalWrite(LED, HIGH); 
      break;
    case 'o': 
      digitalWrite(LED, LOW);    
    break;
    default:  break;
  }
}
