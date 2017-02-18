
 var pagetop, menu, yPos, menu1;
           function yScroll() {
               pagetop = document.getElementById('pagetop');
               menu = document.getElementById('menu');
               menu1 = document.getElementById('menu1');
               yPos = window.pageYOffset;
               if (yPos>10) {
                   pagetop.style.height = "0px";
                   pagetop.style.paddingTop = "50px";
                   pagetop.style.opacity = "0.9";
                   menu.style.height = "50px";
                   menu1.style.top="5.1%";
               }
               else{
                   pagetop.style.height="120px";
                   pagetop.style.paddingTop="50px";
                   menu.style.height="50px";
                   menu1.style.top = "18%";
                   pagetop.style.opacity = "1";
               }
               }
           
           window.addEventListener("scroll", yScroll);
