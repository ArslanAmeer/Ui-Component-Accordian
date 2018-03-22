
document.addEventListener("DOMContentLoaded", function () {

    var pnl = document.getElementsByClassName("panel-head");

    for (let i = 0; i < pnl.length; i++) {

        pnl[i].addEventListener("click", function () {

            this.classList.toggle("active");
            var panelBody = this.nextElementSibling;

            if (panelBody.style.height != 0) {
                panelBody.style.height = null;
            } else {
                panelBody.style.height = "100px";
            }

        });

    }

});
