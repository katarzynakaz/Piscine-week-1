export { addData } from "./storage.mjs";

const test_data = {
  user1: [{ topic: "Functions in JS", date: "19-07-2025" }],
  user2: [
    { topic: "Variables in Python", date: "05-11-2025" },
    { topic: "Functions in Python", date: "05-10-2025" },
  ],
  user3: [
    { topic: "Codewars", date: "26-07-2025" },
    { topic: "Functions in Python", date: "05-10-2025" },
  ],
};

Object.entries(test_data).forEach(([userId, data]) => {
  addData(userId, data);
});
