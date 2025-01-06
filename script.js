const calculateBtn = document.querySelector("#calculate-btn");
const result = document.querySelector("#age");
const today = new Date();
const currentYear = today.getFullYear();

calculateBtn.addEventListener("click", function () {
  const inputAge = document.querySelector("#dob").value;
  if (!inputAge) {
    result.textContent = "Please enter correct date of birth";
    return;
  }

  const birthDate = new Date(inputAge);
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  let age = currentYear - birthYear;

  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  result.textContent = `${age}`;
});
