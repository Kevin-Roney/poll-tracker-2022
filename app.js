// import functions and grab DOM elements
import { renderPoll } from './render-utils.js';

const input1 = document.getElementById('input-option1');
const addButton = document.getElementById('add-options-button');
const input2 = document.getElementById('input-option2');
const current1 = document.getElementById('holder-1');
const add1 = document.getElementById('add-1');
const sub1 = document.getElementById('subtract-1');
//const counter1 = document.getElementById('current-count-1');
const current2 = document.getElementById('holder-2');
const add2 = document.getElementById('add-2');
const sub2 = document.getElementById('subtract-2');
//const counter2 = document.getElementById('current-count-2');
const finis = document.getElementById('finish-button');
const pastPoll = document.getElementById('ready-for-past-polls');
const currentPoll = document.getElementById('current-polling');
console.log(input1, addButton, input2, current1, add1, sub1, current2, add2, sub2, finis, pastPoll, currentPoll);
  

// let state
let count1 = 0;
let count2 = 0;
let poll1 = '';
let poll2 = '';
let past = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
addButton.addEventListener('click', () => {
    poll1 = input1.value;
    poll2 = input2.value;

    input1.value = '';
    input2.value = '';

    refreshCurrentPoll();
});

add1.addEventListener('click', () => {
    count1++;
    refreshCurrentPoll();
});

sub1.addEventListener('click', () => {
    count1--;
    refreshCurrentPoll();
});

add2.addEventListener('click', () => {
    count2++;
    refreshCurrentPoll();
});

sub2.addEventListener('click', () => {
    count2--;
    refreshCurrentPoll();
});

finis.addEventListener('click', () => {
    const pastPolls = {
        poll1: poll1,
        poll2: poll2,
        count1: count1,
        count2: count2,
    };
    past.push(pastPolls);
    displayPolls();
    poll1 = '';
    poll2 = '';
    count1 = 0;
    count2 = 0;
    refreshCurrentPoll();
});

function refreshCurrentPoll() {
    currentPoll.textContent = '';
    current1.textContent = poll1;
    current2.textContent = poll2;
    const pollEl = renderPoll(poll1, poll2, count1, count2);
    pollEl.classList.add('current');
    currentPoll.append(pollEl);
}
function displayPolls() {
    pastPoll.textContent = '';
    for (let pastPollObj of past) {
        const pastPollEl = renderPoll(pastPollObj.poll1, pastPollObj.poll2, pastPollObj.count1, pastPollObj.count2);
        pastPoll.append(pastPollEl);
    }
}