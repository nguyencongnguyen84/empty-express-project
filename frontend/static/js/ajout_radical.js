async function addRadical(){


    jsonData = { 
        radical:$("#rad").val(), 
        meaning:$("#meaning").val() 
    }

    const response = await fetch('http://localhost:3000/api/radical', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(jsonData)
          });
    
}