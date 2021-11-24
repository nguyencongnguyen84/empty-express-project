$(document).ready(()=>{
    fetch('http://localhost:3000/api/radical').then((res) => {
        
        return res.json();
    }).then((json) => {
        json.forEach(element => {
            var o = new Option(element.radical+" - "+element.meaning, element.radical);
            /// jquerify the DOM object 'o' so we can use the html method
            $(o).html(element.radical+" - "+element.meaning);
            $("#toEdit").append(o);
        });
        
        });
});

async function editDelRadical(){


    
    if($("#del").is(":checked")){
        const response = await fetch('http://localhost:3000/api/radical', {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({radical:$("#toEdit").val()})
          });
    }else{
        jsonData = { 
            old:$("#toEdit").val(),
            new:$("#rad").val(), 
            meaning:$("#meaning").val() 
        }
        const response = await fetch('http://localhost:3000/api/radical', {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(jsonData)
          });
    }

    location.reload();

    
}