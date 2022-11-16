const system_path = document.querySelector(".system_path");
      // console.log(name.length);
      //getting value from the localstorage
      const usr_name = localStorage.getItem("usr_name");
      system_path.innerHTML = `#wolfie:\\User\\${usr_name}>`;


      // taking the command from the user form terminal
      var usr_cmd;
      var usr_value = document.getElementById("usr_in");
      usr_value.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          usr_cmd = usr_value.value;
          
          // console.log(usr_cmd.localeCompare("contact"));
          //  console.log(usr_cmd);
          var sys_result = document.querySelector(".system_result");
          
          switch (usr_cmd) {
            case "contact":
            sys_result.innerHTML = "Loading to " + usr_cmd;
               window.location = "contact.html";
               break;
            case "about":
                window.location = "about.html";
                break;
            case "project":
                window.location = "project.html";
                break;

            case "home":
                window.location = "index.html";
               break;
          }
        }
      });