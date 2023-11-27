const employee = {
    name : "Michael",
    streetAddress : "149 Parkway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {

        return {
            ...employee, [key] : value
        };
    }

//console.log(updateEmployeeWithKeyAndValue(employees, "Michael", "14 Driveway") );

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmpl = {...employee};
    delete newEmpl[key];
    return newEmpl;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

//console.log(deleteFromEmployeeByKey(employee, 'name'));