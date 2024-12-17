
function accordion_toggle(target){
    //create a reference to all section using
    // a class name.
    var divsToHide = document.getElementsByClassName("accordion-section");
    for (var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display ="none";
    }
   // console.log("open");
   // console.log(target);
    //create a reference to an element with the
    // same name as thentarget variable

    var content = document.getElementById(target);

    //Check if the content is currently displayed
    if (content.style.display === "block"){

        //Hide the content
        content.style.display = "none";
    }else{
        //Display the content
        content.style.display = "block";

    }

}


