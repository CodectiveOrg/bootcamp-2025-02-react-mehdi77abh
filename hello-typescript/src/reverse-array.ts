export default function reverseArray<T>(array: T[]): T[] {
    const reversed: Array<T> = [];
    for (let i = array.length - 1; i >= 0; --i) {
        reversed.push(array[i]);
    }
    return reversed;
}
