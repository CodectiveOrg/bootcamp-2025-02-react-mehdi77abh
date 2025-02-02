export default function calculateNumberCount<T>(array: T[]): number {
    let count = 0;
    for (const item of array) {
        if (typeof item === "number") {
            count++;
        }
    }

    return count;
}
