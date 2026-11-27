function parseAmount(input) {
    if (input === null || input === undefined) {
        throw new Error("Amount is required");
    }
    if (typeof input !== "string" && typeof input !== "number") {
        throw new Error("Invalid input type");
    }
    let value = input;
    if (typeof value === "string") {
        value = value.trim();
        if (value === "") {
            throw new Error("Amount cannot be empty");
        }
    }
    const amount = Number(value);
    if (Number.isNaN(amount)) {
        throw new Error("Amount must be a valid number");
    }
    if (amount <= 0) {
        throw new Error("Amount must be greater than zero");
    }
    return amount;
}
const inputs = ["500", "250", "", "abc", null, undefined, "12.5.3"];
for (const input of inputs) {
    try {
        console.log("Valid amount:", parseAmount(input));
    } catch (error) {
        console.log("Error:", error.message);
    }
}
console.log('"5" + 2 =', "5" + 2);
console.log('"5" - 2 =', "5" - 2);
console.log("typeof null =", typeof null);
const BANK_NAME = "JS National Bank";
let transactionCounter = 0;
console.log("Bank Name:", BANK_NAME);
transactionCounter++;
console.log("Transaction Count:", transactionCounter);
console.log("\n--- HOISTING DEMO ---");
console.log("Before declaration:", hoistedVar);
var hoistedVar = 100;
try {
    console.log(hoistedLet);
} catch (error) {
    console.log("Let Error:", error.message);
}
let hoistedLet = 200;
announce();
function announce() {
    console.log("Bank announcement is working");
}
try {
    notify();
} catch (error) {
    console.log("Notify Error:", error.message);
}
var notify = function () {
    console.log("Notification sent successfully");
};
notify();
console.log("\n--- ASYNCHRONOUS LOOP ---");
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log("var loop:", i);
    }, 0);
}
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log("let loop:", i);
    }, 0);
}
