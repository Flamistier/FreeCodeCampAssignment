const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const convertToRoman = (num) => {
    // Array of Roman numeral symbols with corresponding values
    const romanNumerals = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
    ];
  
    // Recursive helper function
    function buildRoman(n, index = 0) {
      if (n === 0) return '';  // Base case: when the number is 0, stop recursion
      if (n >= romanNumerals[index][1]) {
        return romanNumerals[index][0] + buildRoman(n - romanNumerals[index][1], index);  // Subtract and continue
      } else {
        return buildRoman(n, index + 1);  // Move to the next Roman numeral
      }
    }
  
    return buildRoman(num);  // Start the recursion with the original number
  };

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (isNaN(inputInt)) {
    result.innerText = "Please enter a valid number";
    return;
  } else if (inputInt < 1) {
    result.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (inputInt > 3999) {
    result.innerText = "Please enter a number less than or equal to 3999";
    return;
  } else {
    result.innerText = "";
    result.innerText = convertToRoman(inputInt);
  }
};

convertBtn.addEventListener("click", checkUserInput);
numberInput,
  addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkUserInput();
    }
  });
