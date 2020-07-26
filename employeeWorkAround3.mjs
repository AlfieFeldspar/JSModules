//import using variable names from export default

import {
  Employee,
  getCadre,
  calculateTax,
  getBenefits,
  calculateBonus,
  reimbursementEligibility,
} from "./employeeSalaries3.mjs";

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log("Cadre: " + getCadre());
  console.log("Tax: " + calculateTax());
  console.log("Benefits: " + getBenefits());
  console.log("Bonus: " + calculateBonus());
  console.log(
    "Reimbursement Eligibility: " + reimbursementEligibility() + "\n"
  );
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
