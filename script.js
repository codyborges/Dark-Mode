// DOM variables
darkBtn = document.querySelector('.darkMode')


//Event Listeners
darkBtn.addEventListener('click', dark)

//Functions
function dark(){
document.querySelector('h1').innerHTML = "It's Demon Time"
  document.querySelector('h1').style.color = 'red'
  document.querySelector('body').style.backgroundImage = 'url("https://images.unsplash.com/photo-1523521384060-d1bdc9e477b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")'
}