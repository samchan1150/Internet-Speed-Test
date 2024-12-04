# Internet Download Speed Test App

## Overview

The application is a web-based tool designed to measure a user's internet download speed. It provides a simple and interactive way for users to assess their network performance directly from their browser.

## How the App Works

### User Initiation

- The user interacts with the app by clicking the **"Start Test"** button on the webpage. This action initiates the download speed test.

### Download Process

- The app begins downloading a large image file (specifically a 2MB image) from a designated server URL.
- To ensure that each test is accurate and not affected by cached content, a random query parameter is appended to the image URL. This prevents the browser from loading a cached version of the image, guaranteeing a fresh download with each test.

### Timing the Download

- The app records the precise start time just before the download begins.
- It listens for the `onload` event of the image, which fires when the image has fully downloaded. At this point, the app records the end time.
- By calculating the difference between the end time and the start time, the app determines the total duration of the download in seconds.

### Calculating Download Speed

- Using the known size of the image file (2MB converted into bits) and the duration of the download, the app computes the download speed.
- The calculation follows these steps:
  1. **Bits Loaded**: Multiply the image size in bytes by 8 to convert it to bits.
  2. **Bits per Second (bps)**: Divide the bits loaded by the duration in seconds.
  3. **Megabits per Second (Mbps)**: Convert bits per second to megabits per second by dividing by 1,048,576 (since 1 Mbps = 1,048,576 bps).
- This results in an accurate measurement of the user's download speed in Mbps.

### Displaying Results

- Once the speed is calculated, the app updates the user interface to display the result.
- It shows a message indicating that the download speed test is complete.
- The user's download speed is presented in Mbps with two decimal places for precision (e.g., **"Your download speed is: 25.36 Mbps"**).

## Technical Highlights

### Asynchronous Operations

- The app leverages asynchronous loading of the image to ensure that the download process does not block the user interface.
- Event listeners (`onload` and `onerror`) are used to handle the completion of the download and any potential errors without freezing the UI.

### Performance Considerations

- By testing with a sizable file and preventing caching, the app provides a realistic assessment of the user's network capabilities.
- The use of precise timing functions allows for accurate calculation of download speeds.

### User Experience

- Status messages keep the user informed throughout the process, enhancing the overall experience.
- The straightforward design ensures that users can easily perform the test without any technical expertise.

---

The application adheres to the organization's code patterns and best practices, ensuring reliability and maintainability. It provides a practical solution for users to check their internet download speed using standard web technologies.
