function SetMarkRober(active) {
    if (active) {
        conjureButton = document.getElementById("conjureRober");
        conjureButton.style.display = "none";
        
        dismissButton = document.getElementById("dismissRober");
        dismissButton.style.display = "block";

        rober = document.getElementById("mark");
        rober.style.display = "block";
    } else {
        dismissButton = document.getElementById("dismissRober");
        dismissButton.style.display = "none";
        
        conjureButton = document.getElementById("conjureRober");
        conjureButton.style.display = "block";
        
        rober = document.getElementById("mark");
        rober.style.display = "none";
    }
}

function SwitchPage(page) {
    window.location.href = page;
}