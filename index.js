const os = require('os');
const osUtils = require('os-utils');

// Get the total system memory (in bytes)
const totalMemory = os.totalmem();

// Get the number of CPU cores
const numCPUs = os.cpus().length;

// Initialize an array to store CPU usage for each core
const cpuUsageArray = new Array(numCPUs).fill(0);

// Update CPU usage every second
setInterval(() => {
  osUtils.cpuUsage((v) => {
    // Calculate total CPU usage percentage across all cores
    const totalCpuUsage = v * 100 * numCPUs;

    // Log the total CPU usage
    console.log(`Total CPU Usage: ${totalCpuUsage.toFixed(2)}%`);

    // Log individual core CPU usage
    for (let i = 0; i < numCPUs; i++) {
      cpuUsageArray[i] = v * 100;
      console.log(`Core ${i + 1} CPU Usage: ${cpuUsageArray[i].toFixed(2)}%`);
    }
  });
}, 1000);

// Log the total memory in gigabytes (GB)
console.log(`Total Memory: ${totalMemory / (1024 * 1024 * 1024)} GB`);
