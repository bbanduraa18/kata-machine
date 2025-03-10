interface Node<T> {
  value: T;
  prev?: Node<T>;
}

class QueueNode<T> implements Node<T> {
  constructor(public value: T, public prev?: QueueNode<T>) {}
}

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const newNode = new QueueNode(item, this.head);

    this.head = newNode;
    this.length++;
  }
  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    const head = this.head;
    this.head = head?.prev;
    this.length--;

    return head?.value;
  }
  peek(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    return this.head.value;
  }
}
