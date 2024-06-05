function generatePassword(length, charset) {
  let password = '';
  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

export function generatePasswords() {
  const length = parseInt(document.getElementById('length').value, 10);
  const useSymbolsNumbers = document.getElementById('useSymbolsNumbers').checked;

  const charsetLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charsetNumbersSymbols = '0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
  const charset = charsetLetters + (useSymbolsNumbers ? charsetNumbersSymbols : '');

  const password1 = document.getElementById('password1');
  const password2 = document.getElementById('password2');

  password1.innerText = generatePassword(length, charset);
  password2.innerText = generatePassword(length, charset);
}

function showNotification(message, notificationId) {
  const notification = document.getElementById(notificationId);
  notification.innerText = message;
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
    notification.innerText = '';
  }, 2000);
}

export function copyToClipboard(elementId, notificationId) {
  const passwordElement = document.getElementById(elementId);
  const range = document.createRange();
  range.selectNode(passwordElement);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();

  showNotification(`Copied!`, notificationId);
}

// Attach event listeners after defining the functions
document.getElementById('generateButton').addEventListener('click', generatePasswords);
document
  .getElementById('password1')
  .addEventListener('click', () => copyToClipboard('password1', 'notification1'));
document
  .getElementById('password2')
  .addEventListener('click', () => copyToClipboard('password2', 'notification2'));
