export default function sortObjectByDate<T extends {createdAt:string,updatedAt?:string}>(array: T[]):T[] {

    let result = array.slice();
    let count = array.length;
    for (let i = 0; i < count - 1; i++) {
        for (let j = 0; j < count - i - 1; j++) {

            const biggerDateCurrent = getBiggerDate(result[j]);
            const biggerDateNext =      getBiggerDate(result[j + 1]);

            if (biggerDateCurrent > biggerDateNext) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }

        }
    }

    return result;

}

function getBiggerDate(obj: { createdAt: string, updatedAt?: string }): Date {
    const createAtDate = new Date(obj.createdAt);
    if (obj.updatedAt==undefined) {
        return createAtDate;
    }
    const updateAtDate =new Date(obj.updatedAt) ;

    return createAtDate > updateAtDate ? createAtDate : updateAtDate;

}

