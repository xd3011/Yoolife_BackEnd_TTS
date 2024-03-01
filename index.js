import { TuyaContext } from '@tuya/tuya-connector-nodejs';

const context = new TuyaContext({
    baseUrl: 'https://openapi.tuyacn.com',
    accessKey: 'xtu7m*****48ufo',
    secretKey: '479bcba6d*******d9c4e080f7',
});

const main = async () => {
    // Define the device ID
    const device_id = "vdev*******80003567";
    // Query device details
    const devicedetail = await context.device.detail({
        device_id: device_id,
    });
    if (!devicedetail.success) {
        new Error();
    }
    console.log("Device details:", devicedetail);
    // Send commands
    const commands = await context.request({
        path: `/v1.0/iot-03/devices/${device_id}/commands`,
        method: 'POST',
        body: {
            "commands": [{ "code": "switch_led", "value": true }]
        }
    });
    if (!commands.success) {
        new Error();
    }
    console.log("Execution result:", commands);
};
main().catch(err => {
    console.log(err);
});
