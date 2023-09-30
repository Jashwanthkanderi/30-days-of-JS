// Import the qrcode library (include it in your project)
import QRCode from 'qrcode';

// Get references to the HTML elements
const textInput = document.getElementById('text');
const generateButton = document.getElementById('generate');
const qrCodeDisplay = document.getElementById('qrcode');
const downloadButton = document.getElementById('download');

// Function to generate and display the QR code
function generateQRCode() {
    const text = textInput.value;

    // Clear the previous QR code if any
    qrCodeDisplay.innerHTML = '';

    // Generate the QR code and display it
    QRCode.toCanvas(qrCodeDisplay, text, function (error) {
        if (error) console.error(error);
        console.log('QR Code generated!');
    });
}

// Function to download the QR code as an image
function downloadQRCode() {
    const canvas = document.querySelector('canvas');

    if (canvas) {
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = url;
        a.download = 'qrcode.png';
        a.click();
    } else {
        console.error('No QR code available to download.');
    }
}

// Add an event listener to the "Generate QR Code" button
generateButton.addEventListener('click', generateQRCode);

// Add an event listener to the "Download QR Code" button
downloadButton.addEventListener('click', downloadQRCode);
