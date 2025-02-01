type Item = { createdAt: string, modifiedAt?: string };

export default function sortItemsByDate(array: Item[]): Item[] {

    const result = [...array];
    const count = array.length;
    for (let i = 0; i < count - 1; i++) {
        for (let j = 0; j < count - i - 1; j++) {

            const nextDate = new Date(result[j+1].modifiedAt ?? result[j+1].createdAt);
            const currentDate = new Date(result[j].modifiedAt ?? result[j].createdAt);

            if (currentDate > nextDate) {
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }

        }
    }

    return result;

}
