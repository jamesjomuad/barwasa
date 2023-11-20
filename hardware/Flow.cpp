static const uint8_t D2 = 4;
int sensorPin = D2;
volatile long pulse;
unsigned long lastTime;
float volume;

void setup() {
    pinMode(sensorPin, INPUT);
    Serial.begin(9600);
    attachInterrupt(digitalPinToInterrupt(sensorPin), increase, RISING);
}

void loop() {
    volume = 2.663 * pulse / 1000 * 30;
    if (millis() - lastTime > 2000) {
        pulse = 0;
        lastTime = millis();
    }
    Serial.print(pulse);
    Serial.println(" L/m");
    delay(3000);
}

ICACHE_RAM_ATTR void increase() {
    pulse++;
}
