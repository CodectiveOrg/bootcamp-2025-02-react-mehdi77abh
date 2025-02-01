import reverseArray from "./reverse-array";
import calculateNumberCount from "./list-number-counter";
import sortItemsByDate from "./sort-list-items";

function reverseArrayMethod() {
    const items = ["Ali", "Reza", "Mamad"];

    const result = reverseArray(items);
    console.log("Question 1: ", result);
}

function calculateNumberCountMethod() {
    const items = [
        "Ali",
        2,
        100,
        "BEE",
        true,
        false,
        200,
        "Meti",
        "100",
    ];

    const count = calculateNumberCount(items);
    console.log("Question 2: ", count);
}

function sortListMethod() {
    const items = [

        {
            createdAt: "2019-10-28T19:59:45.956Z",
            modifiedAt: "2022-10-11T19:59:45.956Z",
            id: "123"

        },

        {
            createdAt: "2024-02-28T19:59:45.956Z",
            modifiedAt: "2024-10-14T19:59:45.956Z",
            isMale: true
        },
        {
            createdAt: "2024-10-13T19:59:45.956Z",
            modifiedAt: "2024-11-13T19:59:45.956Z",
            isMale: false

        },
        {
            createdAt: "2024-10-28T19:59:45.956Z",
            modifiedAt: "2025-10-12T19:59:45.956Z",

        },
        {
            createdAt: "2020-10-10T19:59:45.956Z",
            id: "123",
            name: "Meti"
        },
        {
            createdAt: "2000-10-28T19:59:45.956Z",
            modifiedAt: "2001-09-28T19:59:45.956Z",
            name: "Meti"

        },

    ]
    const sortedItems = sortItemsByDate(items);
    console.log("Question 3: ", sortedItems)
}

function main(): void {
    reverseArrayMethod();
    calculateNumberCountMethod()
    sortListMethod();

}

main();
