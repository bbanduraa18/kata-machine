interface ListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;
}

class LinkedListNode<T> implements ListNode<T> {
  constructor(public value: T, public next: LinkedListNode<T> | null = null) {}
}

export default class SinglyLinkedList<T> {
  public length: number = 0;
  private head: LinkedListNode<T> | null = null;
  private tail: LinkedListNode<T> | null = null;

  constructor() {}

  prepend(item: T): void {
    const newNode = new LinkedListNode(item, this.head);
    this.head = newNode;
    this.length++;

    if (!this.tail) {
      this.tail = newNode;
    }
  }
  insertAt(item: T, idx: number): void {
    if (idx < 0 || idx > this.length) {
      return;
    }

    if (idx === 0) {
      this.prepend(item);
      return;
    }

    let current = this.head;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      if (i === idx) {
        const newNode = new LinkedListNode(item, current);
        prev!.next = newNode;
        this.length++;
        return;
      }

      prev = current;
      current = current?.next || null;
    }
  }
  append(item: T): void {
    if (this.length === 0) {
      this.prepend(item);
      return;
    }

    const newNode = new LinkedListNode(item);
    this.tail!.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  remove(item: T): T | undefined {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1 && this.head?.value === item) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return item;
    }

    let current = this.head;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      if (current?.value === item) {
        if (current === this.head) {
          this.head = this.head?.next || null;
          this.length--;
          return item;
        }

        prev!.next = null;
        this.length--;
        return item;
      }

      prev = current;
      current = current?.next || null;
    }

    return undefined;
  }
  get(idx: number): T | undefined {
    if (idx < 0 || idx > this.length) {
      return undefined;
    }

    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === idx) {
        return current?.value;
      }
      current = current!.next;
    }

    return undefined;
  }
  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx > this.length) {
      return undefined;
    }

    if (idx === 0) {
      const removedNode = this.head;
      this.head = this.head?.next || null;
      this.length--;

      if (this.length === 0) {
        this.tail = null;
      }

      return removedNode?.value;
    }

    let current = this.head;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      if (i === idx) {
        prev!.next = current?.next || null;
        this.length--;
        return current?.value;
      }

      prev = current;
      current = current?.next || null;
    }

    return undefined;
  }
}
