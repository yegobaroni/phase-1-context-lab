/* Your Code Here */
function createEmployeeRecord(recArray){
    return {
        firstName: recArray[0],
        familyName: recArray[1],
        title: recArray[2],
        payPerHour: recArray[3],
        timeInEvents:[],
        timeOutEvents:[]
    };


}
function createEmployeeRecords(recsArray){
    return recsArray.map(rec=>createEmployeeRecord(rec));

}
function createTimeInEvent(datestamp){
    let [date, hour] = datestamp.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    });
    return this  

}
function createTimeOutEvent(datestamp){
    let [date, hour] = datestamp.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    });
    return this  
}

function hoursWorkedOnDate(date){
    const inEvent = this.timeInEvents.find(inEvent=>inEvent.date === date);
    const outEvent = this.timeOutEvents.find(outEvent=>outEvent.date === date);
            return ((outEvent.hour - inEvent.hour)/100)

}
function  wagesEarnedOnDate(date){
    return hoursWorkedOnDate.apply(this, [date])* this.payPerHour

} 
function findEmployeeByFirstName(srcArray, targetName){
    for(let i=0; i<srcArray.length;i++){
        if(srcArray[i].firstName===targetName){
            return srcArray[i]
        }}
}
function calculatePayroll(recsArray){
    let payroll = []
    recsArray.forEach(element => payroll.push(allWagesFor.call(element)))
    return payroll.reduce((a,b)=>{return a+b})

}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

