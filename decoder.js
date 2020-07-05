/* 
*  Decoder function for The Things Network to unpack the payload of the IMBuildings LoRaWAN People Counter
*  The counters are available here: https://connectedthings.store/gb/imbuildings-lorawan-people-counter-eu868.html
*
*  This function was created by Cameron Sharp at Sensational Systems - cameron@sensational.systems
*/


function Decoder(bytes, port) {
    var params = {
        "bytes": bytes
    };

    // Device stats
    params.battery = ((bytes[11] << 8) | bytes[12]) / 100;
    params.sensor_status = bytes[17];
    params.payload_counter = bytes[22];

    // There are separate counters for people travelling in each direction. These directions are marked on the units.
    // There are also running total counts (one for each direction), useful if some packets are lost.
    
    // Count of people travelling from counter_a to counter_b
    params.counter_a = (bytes[13] << 8) | bytes[14];
    params.total_counter_a = (bytes[18] << 8) | bytes[19];

    // Count of people travelling from counter_b to counter_a
    params.counter_b = (bytes[15] << 8) | bytes[16];
    params.total_counter_b = (bytes[20] << 8) | bytes[21];

    return params;
  }
