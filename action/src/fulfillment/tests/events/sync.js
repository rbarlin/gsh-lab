module.exports = {
    "resource": "/fulfillment",
    "path": "/fulfillment",
    "httpMethod": "POST",
    "headers": {
        "Authorization": "Bearer supersecret",
    },
    "requestContext": {
        "path": "/Prod/fulfillment",
        "identity": {},
    },
    "body": JSON.stringify({
        "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf",
        "inputs": [{
          "intent": "action.devices.SYNC"
        }]
      }),
    "isBase64Encoded": false
}
