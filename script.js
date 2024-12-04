// script.js

const startBtn = document.getElementById('startBtn');
const status = document.getElementById('status');
const result = document.getElementById('result');

startBtn.addEventListener('click', () => {
    imagesLoaded = 0;
    totalspeedMbps = 0;
    result.textContent = '';
    status.textContent = 'Testing download speed...';
    testDownloadSpeed();
});

function testDownloadSpeed() {
    const image = new Image();
    const imageUrl = 'https://cloud-1zjuhet1m-hack-club-bot.vercel.app/0verybig.jpg?' + Math.random();
    const startTime = new Date().getTime();
    let endTime = 0;

    image.onload = () => {
        endTime = new Date().getTime();
        calculateSpeed(startTime, endTime);
    };

    image.onerror = (err, msg) => {
        status.textContent = 'Error testing speed.';
        console.error('Error loading image:', err, msg);
    };

    // Start downloading the image
    image.src = imageUrl;
}

function calculateSpeed(startTime, endTime) {
    const duration = (endTime - startTime) / 1000; // time in seconds
    const imageSize = 2 * 1024 * 1024; // image size in bytes (2MB)

    const bitsLoaded = imageSize * 8;
    const speedBps = bitsLoaded / duration; // bits per second
    const speedKbps = speedBps / 1024; // kilobits per second
    const speedMbps = speedKbps / 1024; // megabits per second
    console.log('speedMbps:', speedMbps);
    displaySpeed(speedMbps);
}

function displaySpeed(speedMbps) {
    status.textContent = 'Download speed test complete!';
    result.textContent = `Your download speed is: ${speedMbps.toFixed(2)} Mbps`;
}