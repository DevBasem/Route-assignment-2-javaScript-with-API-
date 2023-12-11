let output = document.getElementById('output');
let output1 = document.getElementById('output1');
let category = 'happiness'

const getQuote = () => 
{
  fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, 
          { // These Are The Options For The Fetch Request 
            method: 'GET',
            headers: { 'X-Api-Key': 'b8sazZSGdFw/A5C485uBuQ==Pyn50nepy0H9IU9M'},
            contentType: 'application/json'
          }
       )
    .then(response => response.json())
    .then(data => 
      {
        console.log(data);
        output.innerHTML = data[0].quote;
        output1.innerHTML = 'By: '+data[0].author;
      })
}