`use strict`;

let passengers = [{name:`Josh`, paid: true},{name:`Thao`, paid:true}, {name: `Susan`, paid:false},{name:`John`, paid:false}];

function processPassengers(passengers, testFunction){
    for(let i = 0; i <passengers.length; i++){
        if(testFunction(passengers[i])){
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger){
    return (passenger.name === `John`);
}
function checkNotPaid(passenger){
    return (!passenger.paid);
}

let allCanFly = processPassengers(passengers, checkNoFlyList);
if(!allCanFly){
    console.log(`The plane can't take off!  We have a NO FLY PASSENGER`);
}

let allPaid = processPassengers(passengers, checkNotPaid);
if(!allPaid){
    console.log(`The plane can't take off! Someone didn't pay!`)
}

function printPassenger(passenger){
    let message = passenger.name;
    if(passenger.paid){
        message = message + " has paid";
    } else{
        message = message + " has not paid";
    }
    console.log(message);
    return false;
}

processPassengers(passengers, printPassenger);