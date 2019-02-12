# Läsnäolojärjestelmä 
## microbit-BT-BEACON.hex Version 0.0.1
Tiedosto sisältää koodin microbitillä toetutettuun bluethooth beaconiin joka jatkuvasti lähettää bluethooth signaalia.
```javascript
input.onButtonPressed(Button.B, function () {
    stopAdvertisingUID()
})
function startAdvertisingUID() {
    bluetooth.advertiseUid(
        4832908,
        4214213,
        7,
        false
    )
    basic.showLeds
       (. . # # .
        # . # . #
        . # # # .
        # . # . #
        . . # # .)
}
function stopAdvertisingUID() {
    bluetooth.stopAdvertising()
    basic.showLeds(. . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .)
}
input.onButtonPressed(Button.A, function () {
    startAdvertisingUID()
})
```
