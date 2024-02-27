export default function bytesToSize(bytes: number): string {
    // Array representing different size units
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
    // Check if the input is 0 bytes
    if (bytes === 0) return '0 Byte';
  
    // Calculate the appropriate size unit (KB, MB, GB, TB) based on the number of bytes
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    
    // Convert the bytes to the appropriate size unit and round to two decimal places
    const size = (bytes / Math.pow(1024, i)).toFixed(2);
  
    // Return the formatted string with the size and size unit
    return `${size} ${sizes[i]}`;
  }
  