var fname, lname, gender, country;
           function Step1() {
               fname = document.getElementById("firstname").value;
               lname = document.getElementById("lastname").value;
               if (fname.length > 1 && lname.length > 2) {
                   document.getElementById("phase1").style.display = "none";
                   document.getElementById("phase2").style.display = "block";
                   document.getElementById("progressBar").value = 33;
                   document.getElementById("status").innerHTML = "Step 2 of 3";
               } else {
                   alert("Please fill in the fields");
               }
           }
           function Step2() {
               gender = document.getElementById("gender").value;
               if (gender.length > 1) {
                   document.getElementById("phase2").style.display = "none";
                   document.getElementById("phase3").style.display = "block";
                   document.getElementById("progressBar").value = 66;
                   document.getElementById("status").innerHTML = "Step 3 of 3";
               } else {
                   alert("Please choose your gender");
               }
           }
           function Step3() {
               country = document.getElementById("country").value;
               if (country.length > 0) {
                   document.getElementById("phase3").style.display = "none";
                   document.getElementById("show_all_data").style.display = "block";
                   document.getElementById("display_fname").innerHTML = fname;
                   document.getElementById("display_lname").innerHTML = lname;
                   document.getElementById("display_gender").innerHTML = gender;
                   document.getElementById("display_country").innerHTML = country;
                   document.getElementById("progressBar").value = 100;
                   document.getElementById("status").innerHTML = "Data Overview";
               } else {
                   alert("Please choose your country");
               }
           }
           function again() {
               document.getElementById('show_all_data').style.display = "none";
               document.getElementById('phase1').style.display = "block";
               document.getElementById("progressBar").value = 0;
               document.getElementById("status").innerHTML = "Phase 1 0f 3";
           }
           function submitForm() {
               alert('Thank You for submitting your details');
                document.getElementById('show_all_data').style.display = "none";
               document.getElementById('phase1').style.display = "block";
               document.getElementById("progressBar").value = 0;
               document.getElementById("status").innerHTML = "Phase 1 0f 3";

           }
           
