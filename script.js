function insertionSort(arr) {
  // Iterate over each element in the array
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i]; // Current element to be inserted into the sorted sequence
    let j = i - 1; // Start comparing with the previous element

    // Move elements of arr[0..i-1] that are greater than currentElement
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j]; // Shift the element to the right
      j--;
    }

    arr[j + 1] = currentElement; // Insert currentElement into the correct position
  }

  return arr;
}

// Test the function
let arr = [12, 11, 13, 5, 6];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr));
