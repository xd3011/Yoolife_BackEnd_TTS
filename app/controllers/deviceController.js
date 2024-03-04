import { TuyaContext } from '@tuya/tuya-connector-nodejs';

const context = new TuyaContext({
    baseUrl: "https://openapi.tuyaus.com",
    accessKey: "5dggxggdmf3sjv5d5srq",
    secretKey: "26af427f8094466bb1594b82dd543d60",
});

const getDevice = async (req, res) => {
    try {
        const { did } = req.params;
        // Send commands
        // const commands = await context.request({
        //     path: `/v1.0/iot-03/devices/${device_id}/commands`,
        //     method: 'POST',
        //     body: {
        //         "commands": [{ "code": "switch_led", "value": true }]
        //     }
        // });
        const commands = await context.request({
            path: `/v2.0/cloud/thing/${did}`,
            method: 'GET',
        });
        if (!commands.success) {
            new Error();
        }
        return res.status(200).json(commands);
    } catch (error) {
        console.error("Error fetching devices:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const queryPropertiesDevice = async (req, res) => {
    try {
        const { did } = req.params;
        const { codes } = req.query;
        const deviceProperties = await context.request({
            path: `/v2.0/cloud/thing/${did}/shadow/properties?codes=${codes}`,
            method: 'GET',
        })
        if (!deviceProperties.success) {
            new Error();
        }
        return res.status(200).json(deviceProperties);
    } catch (error) {
        console.error("Error editing device:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const deleteDevice = async (req, res) => {
    try {
        const { did } = req.params;
        const device = await context.request({
            path: `/v2.0/cloud/thing/${did}`,
            method: 'DELETE',
        })
        if (!device.success) {
            new Error();
        }
        return res.status(200).json(device);
    } catch (error) {
        console.error("Error editing device:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const controlDevice = async (req, res) => {
    try {

    } catch (error) {
        console.error("Error editing device:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    getDevice,
    controlDevice,
    deleteDevice,
    queryPropertiesDevice,
}
