export default class ArrayList<T> {
  public length: number;
  private capacity: number;
  private arrayList: Array<T>;

  constructor(capacity: number) {
    this.length = 0;
    this.capacity = capacity;
    this.arrayList = new Array<T>(capacity);
  }

  prepend(item: T): void {
    if (this.length === this.capacity) {
      this.increaseArrayList();
    }

    for (let i = this.length; i > 0; i--) {
      this.arrayList[i] = this.arrayList[i - 1];
    }

    this.arrayList[0] = item;
    this.length++;
  }
  insertAt(item: T, idx: number): void {
    this.arrayList.splice(idx, 0, item);
    this.length++;
  }
  append(item: T): void {
    if (this.length === this.capacity) {
      this.increaseArrayList();
    }

    this.arrayList[this.length] = item;
    this.length++;
  }
  remove(item: T): T | undefined {
    const idx = this.arrayList.indexOf(item);
    if (idx === -1) {
      return undefined;
    }
    return this.removeAt(idx);
  }
  get(idx: number): T | undefined {
    return this.arrayList[idx];
  }
  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }

    const removedItem = this.arrayList[idx];

    this.length--;
    this.arrayList.splice(idx, 1);
    return removedItem;
  }
  increaseArrayList(): void {
    this.arrayList = this.arrayList.concat(new Array<T>(this.capacity));
    this.capacity *= 2;
  }
}
