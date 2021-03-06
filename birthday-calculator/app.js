const dateOfBirthInput = document.querySelector('.date-of-birth');
const birthdayYearInput = document.querySelector('.birthday-year');
const birthdayWeekdayElement = document.querySelector('.birthday-weekday');
const ageElement = document.querySelector('.age');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'];
const currentYear = new Date().getFullYear();

function calculateBirthdayWeekDayAndAge() {
  const dateOfBirth = new Date(dateOfBirthInput.value);
  const birthYear = dateOfBirth.getFullYear();
  const birthMonth = dateOfBirth.getMonth();
  const birthDate = dateOfBirth.getDate();
  const enteredYear = birthdayYearInput.value;
  const calculatedDate = new Date(`${months[birthMonth]} ${birthDate}, ${enteredYear}`);
  const calculatedWeekday = weekdays[calculatedDate.getDay()];
  const calculatedAge = enteredYear - birthYear;

  if (dateOfBirth && enteredYear >= birthYear) {
    setMinAsBirthdayYear(birthYear);
    birthdayWeekdayElement.innerHTML = calculatedWeekday;
    ageElement.innerHTML = calculatedAge;
  }
}

function setBirthdayYearAsCurrentYear() {
  birthdayYearInput.value = currentYear;
}

function setMinAsBirthdayYear(birthYear) {
  birthdayYearInput.min = birthYear;
}

document.addEventListener('DOMContentLoaded', () => {
  setBirthdayYearAsCurrentYear();
});
