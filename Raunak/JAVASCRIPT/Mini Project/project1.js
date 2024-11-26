document.getElementById("generate-btn").addEventListener("click", () => {
    const qrcodeContainer = document.getElementById("qrcode");
    const text = document.getElementById("text").value.trim();
  
    // Clear the previous QR code
    qrcodeContainer.innerHTML = "";
  
    if (text === "") {
      alert("Please enter text or a URL to generate a QR code.");
      return;
    }
  
    // Generate the QR Code
    QRCode.toDataURL(text, { width: 200, margin: 2 })
      .then((url) => {
        const img = document.createElement("img");
        img.src = url;
        qrcodeContainer.appendChild(img);
      })
      .catch((error) => {
        console.error("Error generating QR code:", error);
      });
  });
  