function quickSort(arr: number[], low: number, high: number): void {
  if (low >= high) {
    return;
  }

  const pivotIndex = partition(arr, low, high);

  quickSort(arr, low, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
  let pivot = arr[high];
  let index = low - 1;

  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      index++;
      [arr[index], arr[i]] = [arr[i], arr[index]];
    }
  }

  index++;
  arr[high] = arr[index];
  arr[index] = pivot;

  return index;
}

export default function quick_sort(arr: number[]): void {
  quickSort(arr, 0, arr.length - 1);
}
