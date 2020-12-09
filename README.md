# The Things Network decoder function for IMBuildings LoRaWAN People Counter

## Depreciated - See IMBuildings decoder
The manufacturer, [IMBuildings, has now published a decoder here](https://github.com/IMBUILDINGS/PayloadParser).

This decoder supports the [IMBuildings LoRaWAN People Counters](https://connectedthings.store/gb/imbuildings-lorawan-people-counter-eu868.html). These are beam-break counters that count traffic in both directions.

<img src="https://connectedthings.store/316-large_default/imbuildings-lorawan-people-counter-eu868.jpg" width="400">

To use this function:
* create a TTN application and register your devices using the TTN console
* in your application, choose "Payload Formats" from the navigation
* paste the decoder function into the textarea
* register the devices in your application using the provided keys

The units send well documented payloads that these decoders should handle.

This code is MIT licenced, and it works fine in our testing. We don't claim it to be excellent, pull requests are encouraged!
