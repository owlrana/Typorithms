export class Array<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(): T | undefined {
        return this.items.pop();
    }

    get(index: number): T | undefined {
        return this.items[index];
    }

    size(): number {
        return this.items.length;
    }
}
