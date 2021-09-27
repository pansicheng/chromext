// Initialize butotn with users's prefered color
let filenameFormatter = document.getElementById("formatter");
let filename = document.getElementById("filename");

// When the button is clicked, inject setPageBackgroundColor into current page
filenameFormatter.addEventListener("click", async () => {
  filename.value = filename.value.replace(/[\W_]+/g, "_")
});
