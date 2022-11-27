// Add your code here
function submitData() {
const formData = {
    name: 'Steve',
    email: 'steve@steve.com'
  };
  
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  const h1 = document.createElement('h1');
  document.body.append(h1);
  const h4 = document.createElement('h4');
  document.body.append(h4);
  
function renderName(word) {
  word.innerText = word;
  h1.append(word);

}

function renderEmail(word) {
  word.innerText = word;
  h4.append(word);
}

  fetch("http://localhost:3000/users", configObj)
    .then(responce => responce.json())
    .then(data => {
      renderName(data.name);
      renderEmail(data.email);
    })
    .catch(error => {
      alert('Error 304/404');
      console.log(error);
    })

}
    
submitData();