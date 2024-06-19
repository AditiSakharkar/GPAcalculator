function showForm(formType) {
  document.getElementById("sgpaForm").classList.remove("active");
  document.getElementById("cgpaForm").classList.remove("active");
  document.getElementById("sgpafromcgpaForm").classList.remove("active");
  if (formType === "sgpa") {
    document.getElementById("sgpaForm").classList.add("active");
  } else if (formType === "cgpa") {
    document.getElementById("cgpaForm").classList.add("active");
  } else if (formType === "sgpafromcgpa") {
    document.getElementById("sgpafromcgpaForm").classList.add("active");
  }
}

function calculateSGPA() {
  const credits = [];

  for (let i = 1; i <= 15; i++) {
    const credit = document.getElementById(`sub${i}-credits`);

    if (credit) {
      credits.push(Number(credit.value));
    }
  }
  const totalCredits = credits.reduce((a, b) => a + b, 0);

  const totalCreditsEarnedInput = document.getElementById(`Total-credits`);
  let totalCreditsEarned = Number(totalCreditsEarnedInput.value);
  if (!totalCreditsEarnedInput.value.trim()) {
    totalCreditsEarned = 22;
  }
  const sgpa = totalCredits / totalCreditsEarned;

  document.getElementById("sgpaResult").textContent = sgpa.toFixed(2);
  openModal();
}

function calculateCGPA() {
  const sgpas = [];
  for (let i = 1; i <= 8; i++) {
    const sgpa = document.getElementById(`sem${i}-sgpa`);
    if (sgpa) {
      sgpas.push(Number(sgpa.value));
    }
  }
  const totalSGPA = sgpas.reduce((a, b) => a + b, 0);
  const cgpa = totalSGPA / sgpas.length;
  document.getElementById("cgpaResult").textContent = cgpa.toFixed(2);
  openModal2();
}

function calculateSGPAfromCGPA() {
  const cgpa1 = parseFloat(document.getElementById('cgpa1').value);
  const sgpa1 = parseFloat(document.getElementById('sgpa1').value);
  const sgpa2 = 2 * cgpa1 - sgpa1;
  document.getElementById("sgpafromcgpaResult").textContent = sgpa2.toFixed(2);
  openModal3();
}


function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function openModal2() {
  document.getElementById("modal2").style.display = "block";
}

function closeModal2() {
  document.getElementById("modal2").style.display = "none";
}

function openModal3() {
  document.getElementById("modal3").style.display = "block";
}

function closeModal3() {
  document.getElementById("modal3").style.display = "none";
}
