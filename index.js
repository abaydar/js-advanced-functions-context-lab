/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecord(employeeArr){
    const employeeObj = {
        firstName: employeeArr[0],
        familyName: employeeArr[1],
        title: employeeArr[2],
        payPerHour: employeeArr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeObj
}

function createEmployeeRecords(nestedEmployeeArr){
    const nestedEmloyeeObj = nestedEmployeeArr.map(employee => {
        return createEmployeeRecord(employee)
    })
    return nestedEmloyeeObj
}

function createTimeInEvent(dateTimeStamp){
    let [date, hour] = dateTimeStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date
    })

    return this
}

function createTimeOutEvent(dateTimeStamp){
    let [date, hour] = dateTimeStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date
    })

    return this
}

function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find(function(timeInEvent){
        if(timeInEvent.date === date)
            return true
    })

    let timeOut = this.timeOutEvents.find(function(timeOutEvent){
        if(timeOutEvent.date === date)
            return true
    })

    return (timeOut.hour - timeIn.hour)/100
    
}

function wagesEarnedOnDate(date){
    let hours = hoursWorkedOnDate.call(this, date)
    let pay = this.payPerHour

    return hours * pay
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(employee => employee.firstName === firstName)
}

function calculatePayroll(employeeRecordsArray){
    let allWages = employeeRecordsArray.map(employeeObj => {return allWagesFor.call(employeeObj)})
    return allWages.reduce(function(total, wages){return wages + total}, 0)
}