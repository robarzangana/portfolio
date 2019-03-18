/* Om man vill toggle
  $("#section_4_inner").slideToggle("slow"); */



/* All sections inner parts will close when site is visitet first time, it will take them 1 milisecond to close when the site is loaded */
$(document).ready(function () {
    $("#section_1_inner").slideUp(1);
    $("#section_2_inner").slideUp(1);
    $("#section_3_inner").slideUp(1);
    $("#section_4_inner").slideUp(1);
});


/*---------------- Section 1 ---------------- */
/* Link will slide down section_2_inner in 2000 miliseconds */
$(document).ready(function () {
    $("#link_section_1").click(function () {
        $("#section_1_inner").slideDown(2000);
    });
});
/* If section_2 div is clicked on the section_2_inner will toggle (close and open) */
$(document).ready(function () {
    $("#section_1").click(function () {
        $("#section_1_inner").slideDown("slow");
    });
});


/*---------------- Section 2 ---------------- */
/* Link will slide down section_2_inner in 2000 miliseconds */
$(document).ready(function () {
    $("#link_section_2").click(function () {
        $("#section_2_inner").slideDown(2000);
    });
});
/* If section_2 div is clicked on the section_2_inner will toggle (close and open) */
$(document).ready(function () {
    $("#section_2").click(function () {
        $("#section_2_inner").slideDown("slow");
    });
});


/*---------------- Section 3 ----------------*/
let i = 0; /* Global variable "i" */
$(document).ready(function () {
    $("#link_section_3").click(function () {
        $("#section_3_inner").slideDown(2000);
        i++; //När man klickar på länken till sektion 3 så kommer i att ökas med 1
        if(i == 1) // Och när i ökas med 1 kommer progressBar funtionen att köras då den körs ÄNDAST när i = 1 och inte fler gånger
            progressBar();
    });
});
$(document).ready(function () {
    $("#section_3").click(function () {
        $("#section_3_inner").slideDown("slow");
        i++;
        if(i == 1)
            progressBar();
    });
});

/*---------------- Section 4 ----------------*/
$(document).ready(function () {
    $("#link_section_4").click(function () {
        $("#section_4_inner").slideDown(2000);
    });
});
$(document).ready(function () {
    $("#section_4").click(function () {
        $("#section_4_inner").slideDown("slow");
    });
});