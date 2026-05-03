basic.forever(function () {
    lcd.clearScreen()
    lcd.displayText("MKE-S14-DHT11", 2, 1)
    lcd.displayText("" + convertToText(dht11.readTemperature(dht11.TemperatureType.Celsius, dht11.PinKit.P0)) + lcd.displaySymbol(lcd.Symbols.sym07) + "C", 1, 2)
    lcd.displayText("III", 8, 2)
    lcd.displayText("" + convertToText(dht11.readHumidity(dht11.PinKit.P0)) + "%", 12, 2)
    basic.pause(5000)
})
