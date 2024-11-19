interface Node<T> {
  value: T;
  next?: Node<T>;
}

class QueueNode<T> implements Node<T> {
  constructor(public value: T, public next?: QueueNode<T>) {}
}

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const newNode = new QueueNode(item);
    this.length++;

    if (!this.tail) {
      this.tail = this.head = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }
  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = head?.next;

    if (!this.head) {
      this.tail = undefined;
    }

    return head?.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
