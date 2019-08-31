function solve(messageInfo) {
    function showSuccessMessage(operation, message) {
        let result = `Successfully executed ${operation}.`;

        console.log(result);
        console.log('='.repeat(result.length));
        console.log(`${message}.`);
    }

    function showWarningMessage(message) {
        let result = `Warning: ${message}.`;

        console.log(result);
        console.log('='.repeat(result.length));
    }

    function showErrorMessage(operation, message, errorCode) {
        let result = `Error: Failed to execute ${operation}.`;
        let reason = `Reason: ${message}.`;
        let error = `Error code: ${errorCode}.`;


        console.log(result);
        console.log('='.repeat(result.length));
        console.log(reason);
        console.log(error);
    }

    function processMessage(messageInfo) {
        let numberMessages = parseInt(messageInfo.shift());

        for (let i = 0; i < numberMessages; i++) {
            let typeMessage = messageInfo.shift();

            switch (typeMessage) {
                case "error": {
                    let operation = messageInfo.shift();
                    let message = messageInfo.shift();
                    let errorCode = messageInfo.shift();

                    showErrorMessage(operation, message, errorCode);
                }
                break;

                case "warning": {
                    let message = messageInfo.shift();

                    showWarningMessage(message);
                }
                break;

                case "success": {
                    let operation = messageInfo.shift();
                    let message = messageInfo.shift();

                    showSuccessMessage(operation, message);
                }
                break;

                default:
                    break;
            }

            console.log();
        }
    }
    
    processMessage(messageInfo);
}


let data = (["4",
    "error", "credit card purchase", "Invalid customer address", "500",
    "warning", "Email not confirmed",
    "success", "user registration", "User registered successfully",
    "warning", "Customer has not email assigned"
]);

solve(data);