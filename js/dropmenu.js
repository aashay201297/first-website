  function d_menu(menu) {
               var menu = document.getElementById(menu);
               
                   menu.style.transform = "perspective(800px) rotateX(0deg)";
                   menu.dataset.opened = "yes";
                   }
function close_menu(menu) {
    var menu = document.getElementById(menu);
                       menu.style.transform = "perspective(800px) rotateX(-90deg)";
                       menu.dataset.opened = "no";
                   }