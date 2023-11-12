#include "Arduino.h"
#include "ESP8266WiFi.h"
#include "ESP8266HTTPClient.h"
#include "WiFiClient.h"


// WiFi parameters to be configured
const char *ssid = "Dlink"; // Write here your router's username
const char *password = "jandavid"; // Write here your router's passward
const char *URL = "https://barwsa.tribelink.me/api/consumption";

WiFiClient client;
HTTPClient http;

void setup(void) {
    Serial.begin(9600);
    // Connect to WiFi
    WiFi.begin(ssid, password);

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

    http_get();
    http_post();
}

void loop()
{
}


void http_get()
{
    String endPoint = "http://httpbin.org/get";

    // Your Domain name with URL path or IP address with path
    http.begin(client, endPoint.c_str());

    // If you need Node-RED/server authentication, insert user and password below
    //http.setAuthorization("REPLACE_WITH_SERVER_USERNAME", "REPLACE_WITH_SERVER_PASSWORD");

    // Send HTTP GET request
    int httpResponseCode = http.GET();

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

void http_post()
{
    String endPoint = "http://httpbin.org/post";

    // Your Domain name with URL path or IP address with path
    http.begin(client, endPoint.c_str());

    // Specify content-type header
    http.addHeader("Content-Type", "application/x-www-form-urlencoded");

    // Data to send with HTTP POST
    String httpRequestData = "id=654ed642b1ba9&volume=23";

    // Send HTTP POST request
    int httpResponseCode = http.POST(httpRequestData);

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
