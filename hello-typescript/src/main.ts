import { reverseArray } from "./task1";
import calculateIntCount from "./task2";
import sortObjectByDate from "./task3";

function main(): void {
  const testArray: Array<string> = ["Ali", "Reza", "Mamad"];
  // const reverseArray = new ReverseArray(testArray);
  // const result = reverseArray.calculate();

  const result = reverseArray(testArray);
  console.log("Question 1 :", result);
  const intCount = calculateIntCount([
    "Ali",
    2,
    100,
    "BEE",
    true,
    false,
    200,
    "Meti",
    "100",
  ]);

  console.log("Question 2 : ", intCount);


  const listOfObject = [

    {
      createdAt: "2019-10-28T19:59:45.956Z",
      updatedAt: "2010-10-11T19:59:45.956Z",
      id: "123"

    },

    {
      createdAt: "2024-02-28T19:59:45.956Z",
      updatedAt: "2024-10-14T19:59:45.956Z",
      isMale: true
    },
    {
      createdAt: "2024-10-13T19:59:45.956Z",
      updatedAt: "2024-09-13T19:59:45.956Z",
      isMale: false

    },
    {
      createdAt: "2024-10-28T19:59:45.956Z",
      updatedAt: "2025-10-12T19:59:45.956Z",

    },
    {
      createdAt: "2020-10-10T19:59:45.956Z",
      id: "123",
      name: "Meti"
    },
    {
      createdAt: "2000-10-28T19:59:45.956Z",
      updatedAt: "2001-09-28T19:59:45.956Z",
      name: "Meti"

    },

  ]
  const sortedObj = sortObjectByDate(listOfObject);
  console.log("Question 3 : ",sortedObj)
}

main();
