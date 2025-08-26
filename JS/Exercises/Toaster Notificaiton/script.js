function createToaster(config) {
    return function(str) {
        let div = document.createElement("div");
        div.textContent = str;
        div.className = "inline-block top-5 right-5 bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity duration-300"
        document.querySelector(".parent").appendChild(div);

        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);
    }
}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
});
toaster("Download Done");

setTimeout(() => {
    toaster("Ayush is now your friend");
}, 2000);

setTimeout(() => {
    toaster("Reacted to your message");
}, 1000);