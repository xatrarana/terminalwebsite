
      /*
        // getting name from the user 
          function starter(){
             var usr_name = prompt("write your name: ");
             const system_path = document.querySelector('.system_path');
             // console.log(name.length);

             //checking if the name field is empty or not
             
             if(usr_name.length != 0){
             localStorage.setItem('usr_name', usr_name);
             system_path.innerHTML = `#wolfie:\\User\\${usr_name}>`;
            }
            else{
                alert("Please!! Enter your name: ")
                system_path.innerHTML = "#wolfie:\\User\\wolfie>";
                 starter();    
             }

           
                  }
             document.addEventListener('load',starter()); 
             
             */

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
          localStorage.setItem("boolval", true);
          window.location="../ui/home.html";
        } else {
          get_name();
        }
      }
      

     