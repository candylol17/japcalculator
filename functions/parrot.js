exports.handler = async function(event, context) {
    const message;
    if(JSON.parse(event.body)){
        const requestBody = JSON.parse(event.body);
        message = requestBody.message;
    }
    

    if(message != null ){
        return {
            statusCode: 200,
            body: JSON.stringify({ message: message }),
            };
    }else{
        return {
                statusCode: 400,
                body: JSON.stringify({ message: "No messsage" }),
            };
    }  
    
  };
  