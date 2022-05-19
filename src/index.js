npm import { companiesData } from "./companies-data";

//TODO: Get an array the unique States.
const states = companiesData.map((company) => company.fieldData.State);
console.log(states);
const findUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};
const uniqueStates = states.filter(findUnique).sort();

console.log(uniqueStates)

//TODO: Crate a parent element for each state.
const createParent = (state) =>{
  const parent = document.createElement("div");
  parent.className = "col-4 p-1";
  parent.innerHTML = `<h2 class='text-muted'>${state}</h2>`;
  return parent;
};




const filterForState = (array, state) =>{
  console.log(array);
  console.log(state);
  return array.filter((company) => company.fieldData.State === state);
};
const checkThis = filterForState(companiesData, "FL");

const createButton = (company) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerHTML = company;
  btn.className = "btn btn-info col-12 m-1";
  return btn;
};

//ultimate function
uniqueStates.forEach((state) => {
  const stateData = filterForState(companiesData, state);
  const parentElement = createParent(state);
  stateData.forEach((company) => {
    const companyName = company.fieldData.CompanyName;
    const btn = createButton(companyName);
    parentElement.appendChild(btn);
  });
 
  after.appendChild(parentElement);
});


