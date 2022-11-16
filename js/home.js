var usr_cmd;
      var usr_value = document.getElementById("usr_in");
      usr_value.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          usr_cmd = usr_value.value;
          // usr_value.value='';
          
          // console.log(usr_cmd.localeCompare("contact"));
         var sys_result = document.querySelector('.system_result');
          let value = usr_cmd.toUpperCase();
          console.log(value);
          switch (value) {
            case "PROJECT":
              sys_result.innerHTML = "Loading to " + usr_cmd;
              setTimeout(() => {
                window.location = "../ui/project.html";
              }, 2000);
              break;
            case "CONTACT":
                sys_result.innerHTML = "Loading to " + usr_cmd;
                setTimeout(() => {
                  window.location = "../ui/contact.html";
                }, 2000);
              break;
              case "HOME":
                sys_result.innerHTML = "Loading to " + usr_cmd;
                setTimeout(() => {
                  window.location = "../ui/home.html";
                }, 2000);
              break;
            case "WOLFIE-H":
                sys_result.innerHTML = "Loading to " + usr_cmd;
                    document.getElementById('system_help').style.display='flex';
                    document.getElementById('system_help').style.flexDirection='column';
                    break;
            case "FUCk":
                sys_result.innerHTML ="Alik ramro bolna sikana. k bole ko teme.";
                       break; 
                      
            case "XATRA":
                var usr_name =localStorage.getItem("usr_name");
                    sys_result.innerHTML = `Hello! ${usr_name}`;
                    break;
            case "CHHATRA":
                        var usr_name =localStorage.getItem("usr_name");
                            sys_result.innerHTML = `Hello! ${usr_name}`;
                            break;
            default:
              window.location = "../ui/home.html";
              break;
          }
        }
        
      });
      const system_path = document.querySelector(".system_path");
      var localval = localStorage.getItem("usr_name");
      system_path.innerHTML = `#wolfie:\\User\\${localval}>`;


      