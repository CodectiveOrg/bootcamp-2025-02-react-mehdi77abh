/*export default class ReverseArray<T> {
    private array: T[];
    constructor(array: T[]) {
        this.array = array;
    }
    public calculate() {

    }

}*/
export function reverseArray<T>(array: T[]): T[] {
  console.log("Entered Array : ", array);
  const reversed: Array<T> = [];
  const count = array.length;
  for (let i = count - 1; i >= 0; --i) {
    reversed.push(array[i]);
  }
  return reversed;
}
