class Age {
  constructor() {
    this.calculateBtn = document.querySelector("#calculate-btn");
    this.result = document.querySelector("#age");
    this.today = new Date();
    this.currentYear = this.today.getFullYear();

    this.addEventListeners();
  }

  addEventListeners() {
    this.calculateBtn.addEventListener("click", () => this.calcAge());
  }

  calcAge() {
    const inputAge = document.querySelector("#dob").value;
    if (!inputAge) {
      this.result.textContent = "Please enter correct date of birth";
      return;
    }

    const birthDate = new Date(inputAge);
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    let age = this.currentYear - birthYear;

    const currentMonth = this.today.getMonth();
    const currentDay = this.today.getDate();
    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && currentDay < birthDay)
    ) {
      age--;
    }

    this.result.textContent = `${age}`;
  }
}

const newlyAge = new Age();
