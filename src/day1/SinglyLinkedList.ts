interface Node<T> {
  value: T;
  next?: LinkedListNode<T>;
}

class LinkedListNode<T> implements Node<T> {
  constructor(public value: T, public next?: LinkedListNode<T>) {}
}

export default class SinglyLinkedList<T> {
  public length: number;
  private head?: LinkedListNode<T>;
  private tail?: LinkedListNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  prepend(item: T): void {
    const newNode = new LinkedListNode(item, this.head);
    this.length++;

    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    this.head = newNode;
  }
  insertAt(item: T, idx: number): void {
    if (idx < 0 || idx >= this.length) {
      return;
    }

    if (idx === 0) {
      this.prepend(item);
      return;
    }

    this.length++;

    let i = 0;
    let current = this.head;
    while (idx < i) {
      current = current?.next;
      i++;
    }

    const newNode = new LinkedListNode(item, current?.next);
    current!.next = newNode;
  }
  append(item: T): void {
    const newNode = new LinkedListNode(item);
    this.length++;

    if (!this.tail) {
      this.tail = this.head = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }
  remove(item: T): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    if (this.head?.value === item) {
      this.head = this.head.next;

      if (!this.head) {
        this.tail = undefined;
        this.length = 0;
      }
      return item;
    }

    let current = this.head;
    let prev = undefined;
    for (let i = 0; i < this.length; i++) {
      if (current.value === item) {
        const removedNode = current;
        prev!.next = removedNode.next;
        return removedNode.value;
      }

      prev = current;
      current = current.next as LinkedListNode<T>;
    }

    return undefined;
  }
  get(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }

    let i = 0;
    let current = this.head;
    while (i !== idx) {
      current = current?.next;
      i++;
    }

    return current?.value;
  }
  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }

    if (idx === 0) {
      const removedNode = this.head;
      this.head = this.head?.next;

      if (!this.head) {
        this.length = 0;
        this.tail = undefined;
      }

      return removedNode?.value;
    }

    this.length--;

    let i = 1;
    let current = this.head;
    while (i < idx) {
      current = current?.next;
      i++;
    }

    const removedNode = current?.next;
    current!.next = removedNode?.next;
    return removedNode?.value;
  }
}
