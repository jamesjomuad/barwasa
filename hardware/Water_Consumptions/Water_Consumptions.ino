#include "Arduino.h"
#include "ESP8266WiFi.h"
#include "ESP8266HTTPClient.h"
#include "WiFiClient.h"
#include "WiFiClientSecure.h"


// WiFi parameters to be configured
const char *ssid = "Dlink"; // Write here your router's username
const char *password = "jandavid"; // Write here your router's password
const int dataPin = D2;
byte sensorInterrupt = 0;

// The hall-effect flow sensor outputs approximately 4.5 pulses per second per
// litre/minute of flow.
float calibrationFactor = 4.5;

volatile byte pulseCount;

float flowRate;
unsigned int flowMilliLitres;
unsigned long totalMilliLitres;
unsigned long totalvolume;

unsigned long oldTime;

// WiFiClient client;
WiFiClientSecure client;
HTTPClient http;


void setup(void) {
    Serial.begin(9600);

    pulseCount = 0;
    flowRate = 0.0;
    flowMilliLitres = 0;
    totalMilliLitres = 0;
    totalvolume = 0;
    oldTime = 0;

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

    attachInterrupt(digitalPinToInterrupt(dataPin), pulseCounter, RISING);
}

ICACHE_RAM_ATTR void pulseCounter() {
    // Increment the pulse counter
    pulseCount++;
}

void loop()
{
    if (WiFi.status() == WL_CONNECTED && (millis() - oldTime) > 5000) // Only process counters once per second
    {
        // Disable the interrupt while calculating flow rate and sending the value to the host
        detachInterrupt(sensorInterrupt);

        // Because this loop may not complete in exactly 1 second intervals we calculate
        // the number of milliseconds that have passed since the last execution and use
        // that to scale the output. We also apply the calibrationFactor to scale the output
        // based on the number of pulses per second per units of measure (litres/minute in
        // this case) coming from the sensor.
        flowRate = ((1000.0 / (millis() - oldTime)) * pulseCount) / calibrationFactor;

        // Note the time this processing pass was executed. Note that because we've
        // disabled interrupts the millis() function won't actually be incrementing right
        // at this point, but it will still return the value it was set to just before
        // interrupts went away.
        oldTime = millis();

        // Divide the flow rate in litres/minute by 60 to determine how many litres have
        // passed through the sensor in this 1 second interval, then multiply by 1000 to
        // convert to millilitres.
        flowMilliLitres = (flowRate / 60) * 1000;

        // Add the millilitres passed in this second to the cumulative total
        totalMilliLitres += flowMilliLitres;
        totalvolume = totalMilliLitres/1000;// send data per liters

        unsigned int frac;

        if (flowRate > 0) {
            Serial.println("Sending volume: " + totalvolume);
            http_get(flowRate);
            delay(9000);
        }
        pulseCount = 0;
    }
}


void http_get(float volume)
{
    const char*  server = "barwsa.tribelink.me";

    client.setInsecure();

    Serial.println("\nStarting connection to server...");
    if (!client.connect(server, 443))
        Serial.println("Connection failed!");
    else {
        Serial.println("Connected to server!");
        // Make a HTTP request:
        client.print("GET http://dev.barwsa.com/api/log?id=6573b8a45e783&volume="); // change id in every device/hardware
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
