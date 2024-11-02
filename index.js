// Task 1: Reverse a String
function reverse() {
    const input = document.getElementById("reverseInput").value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("reverseOutput").innerText = `Reversed String: ${reversed}`;
}

// Task 2: Palindrome Checker
function Palindrome() {
    const input = document.getElementById("palindromeInput").value;
    const isPalindrome = input === input.split("").reverse().join("");
    document.getElementById("palindromeOutput").innerText = 
        isPalindrome ? "It is a palindrome!" : "It is not a palindrome.";
}

// Task 3: Tip Calculator
function calculate() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    const tipAmount = subtotal * (tipPercentage / 100);
    const totalAmount = subtotal + tipAmount;
    document.getElementById("totalOutput").innerText = `Total Amount: $${totalAmount.toFixed(2)}`;
}
