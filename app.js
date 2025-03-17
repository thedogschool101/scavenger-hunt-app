// Initialize QR Scanner
function startQRScanner() {
    let html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 250 });

    html5QrcodeScanner.render((decodedText) => {
        document.getElementById("qrInput").value = decodedText;
        html5QrcodeScanner.clear();
        submitQR();
    });
}

// Start scanner when the page loads
window.onload = startQRScanner;

// QR Code Submission
function submitQR() {
    let qrCode = document.getElementById("qrInput").value;
    
    if (qrCode === "GoldenBone123") { // Change this to actual QR codes
        document.getElementById("qrStatus").innerText = "QR Code verified! Now upload a photo.";
        document.getElementById("photoSection").style.display = "block";
    } else {
        document.getElementById("qrStatus").innerText = "Invalid QR Code.";
    }
}

// Mobile-Friendly Photo Upload
function uploadPhoto() {
    let fileInput = document.getElementById("photoInput");
    
    if (fileInput.files.length > 0) {
        document.getElementById("photoStatus").innerText = "Photo uploaded! Now post it on Facebook.";
        document.getElementById("fbSection").style.display = "block";
    } else {
        document.getElementById("photoStatus").innerText = "Please select a photo.";
    }
}

// Redirect to Facebook Group for Posting (Mobile Optimized)
function postToFacebook() {
    let fbGroupURL = "https://www.facebook.com/groups/YOUR_GROUP_ID"; // Replace with your Facebook Group
    window.open(fbGroupURL, "_blank");
    document.getElementById("fbStatus").innerText = "Please post your photo in the group, then return here.";
    
    setTimeout(() => {
        let verifyButton = document.createElement("button");
        verifyButton.innerText = "Verify Facebook Post";
        verifyButton.onclick = verifyFacebookPost;
        document.getElementById("fbSection").appendChild(verifyButton);
    }, 5000);
}

// Verify Facebook Post (Manual Step)
function verifyFacebookPost() {
    let confirmPost = confirm("Did you post your photo? Click OK to continue.");
    
    if (confirmPost) {
        document.getElementById("nextClueBtn").style.display = "block";
        document.getElementById("fbStatus").innerText = "Post verified! Click 'Get Next Clue'.";
    } else {
        alert("Please post your photo before continuing.");
    }
}

// Show Next Clue
function getNextClue() {
    alert("Here’s your next clue: Go to the park entrance and scan the next QR code!");
}
