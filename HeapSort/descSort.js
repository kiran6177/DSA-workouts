
function heapify(arr, n, i)
{
	var smallest = i; 
	var left = 2 * i + 1; 
	var right = 2 * i + 2; 

	if (left < n && arr[left] < arr[smallest])
		smallest = left;

	if (right < n && arr[right] < arr[smallest])
		smallest = right;

	if (smallest != i) {
		[arr[i], arr[smallest]] = [arr[smallest], arr[i]]

		heapify(arr, n, smallest);
	}
}

function heapSort(arr)
{
    let n = arr.length
	for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
		heapify(arr, n, i);

	for (var i = n - 1; i >= 0; i--) {
		[arr[0], arr[i]] = [arr[i], arr[0]]

		heapify(arr, i, 0);
	}
    return arr

}


console.log(heapSort([4, 6, 3, 2, 9]))



