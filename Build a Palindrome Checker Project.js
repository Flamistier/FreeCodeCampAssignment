const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultSpan = document.getElementById("result");

const checkPalindrome = input => {
    const cleanedInput = input.trim(); // Store for later output
  
    if (!cleanedInput) {
      alert('Please input a value');
      return;
    }
  
    // Remove the previous result
    resultSpan.replaceChildren();
  
    const normalizedStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    const isPalindrome = normalizedStr === [...normalizedStr].reverse().join('');
  
    displayResult(input, isPalindrome);
  };
  
  const displayResult = (originalInput, isPalindrome) => {
    const message = `${originalInput} ${isPalindrome ? 'is' : 'is not'} a palindrome.`;
    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerText = message;
    
    resultSpan.appendChild(pTag);
    resultSpan.classList.remove('hidden'); // Ensure result is visible
  };
  
  checkBtn.addEventListener('click', () => {
    checkPalindrome(userInput.value);
    userInput.value = '';
  });
  
  userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkPalindrome(userInput.value);
      userInput.value = '';
    }
  });