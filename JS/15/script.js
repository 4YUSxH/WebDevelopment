let a = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

a.addEventListener("click", function() {
    fileinp.click();
});

fileinp.addEventListener("change", function (dets) {
    console.log(dets.target.files[0].name);
    a.textContent = dets.target.files[0].name;
})
