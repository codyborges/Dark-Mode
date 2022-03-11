// DOM variables
darkBtn = document.querySelector('.darkMode')


//Event Listeners
darkBtn.addEventListener('click', dark)

//Functions
function dark(){
document.querySelector('h1').innerHTML = "Dark Mode"
  document.querySelector('h1').style.color = 'white'
  document.querySelector('body').style.backgroundImage = 'url("https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")'
}