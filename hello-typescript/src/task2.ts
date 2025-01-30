export default function calculateIntCount<T>(array: T[]):number {
    let count:number =0;


    for (const item of array) {
        if (typeof item === "number") {
            count++;
        }
    }

    return count;
}
