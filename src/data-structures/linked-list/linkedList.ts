import { swap } from '../../utils/swap';
import { Array } from '../array/array';

class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

export class LinkedList<T> {
    private head: Node<T> | null = null;

    add(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(): T | null {
        if (!this.head) return null;
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
}
