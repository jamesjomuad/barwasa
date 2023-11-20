#include <Arduino.h>
#include "ESP8266WiFi.h"
#include "ESP8266HTTPClient.h"
#include "WiFiClient.h"
#include "WiFiClientSecure.h"


// WiFi parameters to be configured
const char *ssid = "Dlink"; // Write here your router's username
const char *password = "jandavid"; // Write here your router's passward

// WiFiClient client;
WiFiClientSecure client;
HTTPClient http;

// Sensor
static const uint8_t D2 = 4;
const int sensorPin = D2;
volatile long pulse;
unsigned long lastTime;
float volume;

void setup(void) {
    Serial.begin(9600);
    // Connect to WiFi
    WiFi.begin(ssid, password);

    Serial.println("Connecting");
    // while wifi not connected yet, print '.'
    // then after it connected, get out of the loop
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    //print a new line, then print WiFi connected and the IP address
    Serial.println("");
    Serial.println("WiFi connected");
    // Print the IP address
    Serial.println(WiFi.localIP());

    // Sensor
    pinMode(sensorPin, INPUT);
    attachInterrupt(digitalPinToInterrupt(sensorPin), increase, RISING);
}

void loop()
{
    volume = 2.663 * pulse / 1000 * 30;
    if (millis() - lastTime > 2000) {
        pulse = 0;
        lastTime = millis();
    }
    Serial.println(pulse);
    delay(500);
}

ICACHE_RAM_ATTR void increase() {
    pulse++;
}

void http_get(int volume)
{
    const char*  server = "barwsa.tribelink.me";

    client.setInsecure();

    Serial.println("\nStarting connection to server...");
    Serial.println("\nSending value: " + volume);

    if (!client.connect(server, 443))
        Serial.println("Connection failed!");
    else {
        Serial.println("Connected to server!");
        // Make a HTTP request:
        client.print("GET http://barwsa.tribelink.me/api/log?id=6555da3c4bde1&volume=");
        client.print(volume);
        client.println(" HTTP/1.0");
        client.println("Host: barwsa.tribelink.me");
        client.println("Connection: close");
        client.println();

        while (client.connected()) {
            String line = client.readStringUntil('\n');
            if (line == "\r") {
                Serial.println("headers received");
                break;
            }
        }
        // if there are incoming bytes available
        // from the server, read them and print them:
        while (client.available()) {
            char c = client.read();
            Serial.write(c);
        }

        client.stop();
    }

}
