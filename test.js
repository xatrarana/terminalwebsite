
 localStorage.setItem("boolval", false);
 var bool = localStorage.getItem("boolval");

// var bool = false;
if (bool != true) {
   get_name();
  // console.log("helo mofos");
  
}
function get_name() {
  var usr_name = prompt("Enter your username");
  if (usr_name.length != 0) {
   
    localStorage.setItem("usr_name", usr_name);
    bool = true;
  }
  else{
      get_name();
  }
  
}
const system_path = document.querySelector('.system_path');
var localval = localStorage.getItem("usr_name");
system_path.innerHTML = `#wolfie:\\User\\${localval}>`;