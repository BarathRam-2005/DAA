function findLargest() {
    const input = document.getElementById("arrayInput").value;
    const arr = input.split(",").map(Number);
  
    function findMaxIndex(arr, low, high) {
      if (low === high) return low;
  
      const mid = Math.floor((low + high) / 2);
      const left = findMaxIndex(arr, low, mid);
      const right = findMaxIndex(arr, mid + 1, high);
  
      return arr[left] > arr[right] ? left : right;
    }
  
    const index = findMaxIndex(arr, 0, arr.length - 1);
    document.getElementById("result").innerText = 
      `Largest element: ${arr[index]} at index ${index}`;
  }
  