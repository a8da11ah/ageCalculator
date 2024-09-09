function calculateAge() {
  const inputDate = new Date(document.getElementById("date-input").value);
  let inputYear = inputDate.getFullYear();
  let inputMonth = inputDate.getMonth() + 1;
  let inputDay = inputDate.getDate();

  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();

  let ageYears, ageMonths, ageDays;

  //   out puts

  let outputYear = document.getElementById("years");
  let outputMonth = document.getElementById("months");
  let outputDay = document.getElementById("days");

  if (notValidDate(inputYear, inputMonth, inputDay, currentDate)) {
    outputYear.textContent = "-";
    outputMonth.textContent = "-";
    outputDay.textContent = "-";
    alert("بعده ما جابته امه ");
    return;
  }

  ageYears = currentYear - inputYear;
  ageMonths = currentMonth - inputMonth;
  ageDays = currentDay - inputDay;
  
  if (ageDays < 0) {
    let daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    ageDays = daysInPreviousMonth + ageDays;
    ageMonths--;
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths = 12 + ageMonths;
  }


//   console.log('done',ageYears);
  
  outputYear.innerHTML = ageYears;
  outputMonth.innerHTML = ageMonths;
  outputDay.innerHTML = ageDays;
}

function notValidDate(year, month, day, currentDate) {
  //   console.log(currentDate);
  let cond = false;
  if (year > currentDate.getFullYear()) {
    cond = true;
    return cond;
  }
  if (month > currentDate.getMonth() && year === currentDate.getFullYear()) {
    cond = true;
    return cond;
  }
  if (
    day >= currentDate.getDate() &&
    month === currentDate.getMonth() &&
    year === currentDate.getFullYear()
  ) {
    cond = true;
    return cond;
  }
  return cond;
}

