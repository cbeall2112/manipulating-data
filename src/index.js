import { companiesData } from "./companies-data";

const extraRecord = {
  title: "JS in FM Training",
  type: "Binge Mode",
  cohort: "2",
  startDate: "2022-04-12",
};

const before = document.getElementById("before");
before.innerHTML = JSON.stringify(companiesData, null, 2);
//TODO: Extract an element from the array.
//    const manipulatedData = companiesData[2];
//TODO: Add elements to beginning and end of array.
//TODO: Remove Elements from end of array.
//TODO: Create a new array from old data.
//TODO: Filter for a certain state.
//TODO: Find the first element with a certain name.
//TODO: Create a new array with just elements of a certain state.
//TODO: Create buttons for each record.
//functions are here
const filterFunction = (company) => company.fieldData.State !== "CA";
const mapFunction = (company) => {
  const newObj = {
    state: company.fieldData.State,
    company: company.fieldData.CompanyName,
    id: company.fieldData.Id,
  };
  return newObj;
};

const forEachFunction = (company) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerHTML = company.company;
  btn.className = "btn btn-info";
  after.appendChild(btn);
};

const filteredData = companiesData.filter(filterFunction);
const manipulatedData = filteredData.map(mapFunction);

manipulatedData.forEach(forEachFunction);
// after.innerHTML = JSON.stringify(manipulatedData, null, 2);
before.innerHTML = JSON.stringify(companiesData, null, 2);
