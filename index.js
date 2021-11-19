const validatePassword = (password) => {
  if (password.length < 8) return false

  let upper = 0
  let lower = 0
  let numeric = 0
  let special = 0

  for (let i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
      lower++
    } else if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      upper++
    } else if (!isNaN(password[i])) {
      numeric++
    } else if (password.charCodeAt(i) >= 33 && password.charCodeAt(i) <= 47 ||
        password.charCodeAt(i) >= 58 && password.charCodeAt(i) <= 64 ||
        password.charCodeAt(i) >= 91 && password.charCodeAt(i) <= 96 ||
        password.charCodeAt(i) >= 123 && password.charCodeAt(i) <= 126) {
      special++
    }
  }

  return lower > 0 && upper > 0 && numeric > 0 && special > 0
}

module.exports = validatePassword
