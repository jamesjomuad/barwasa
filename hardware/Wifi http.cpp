#include "Arduino.h"
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
}

void loop()
{
    http_get(random(100));
    delay(9000);
}


void http_get(int volume)
{
    const char*  server = "barwsa.tribelink.me";

    client.setInsecure();

    Serial.println("\nStarting connection to server...");
    if (!client.connect(server, 443))
        Serial.println("Connection failed!");
    else {
        Serial.println("Connected to server!");
        // Make a HTTP request:
        client.print("GET http://barwsa.tribelink.me/api/log?id=6545a22f1a453&volume=");
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

void http_post()
{
    // Your Domain name with URL path or IP address with path
    http.begin(client, "http://httpbin.org/post");

    // Specify content-type header
    http.addHeader("Content-Type", "application/x-www-form-urlencoded");

    // Send HTTP POST request
    int httpResponseCode = http.POST("id=655031d9a9da8&volume=20");

    if (httpResponseCode>0) {
        Serial.print("HTTP Response code: ");
        Serial.println(httpResponseCode);
        String payload = http.getString();
        Serial.println(payload);
    }
    else {
        Serial.print("Error code: ");
        Serial.println(httpResponseCode);
    }

    // Free resources
    http.end();
}
