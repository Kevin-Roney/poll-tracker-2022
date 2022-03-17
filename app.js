// import functions and grab DOM elements
import { renderPoll } from './render-utils.js';

const input1 = document.getElementById('input-option1');
const addButton = document.getElementById('add-options-button');
const input2 = document.getElementById('input-option2');
const current1 = document.getElementById('holder-1');
const add1 = document.getElementById('add-1');
const sub1 = document.getElementById('subtract-1');
const current2 = document.getElementById('holder-2');
const add2 = document.getElementById('add-2');
const sub2 = document.getElementById('subtract-2');
const finis = document.getElementById('finish-button');
const pastPoll = document.getElementById('ready-for-past-polls');
const currentPoll = document.getElementById('current-polling');
const questionInput = document.getElementById('question-input');
const currentQ = document.getElementById('question');


// let state
let count1 = 0;
let count2 = 0;
let question = '';
let poll1 = '';
let poll2 = '';
let past = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
addButton.addEventListener('click', () => {
    question = questionInput.value;
    poll1 = input1.value;
    poll2 = input2.value;

    questionInput.value = '';
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
        question: question,
        poll1: poll1,
        poll2: poll2,
        count1: count1,
        count2: count2,
    };
    past.push(pastPolls);
    displayPolls();
    question = '';
    poll1 = '';
    poll2 = '';
    count1 = 0;
    count2 = 0;
    refreshCurrentPoll();
});

function refreshCurrentPoll() {
    currentPoll.textContent = '';
    currentQ.textContent = question;
    current1.textContent = poll1;
    current2.textContent = poll2;
    const pollEl = renderPoll(question, poll1, poll2, count1, count2);
    pollEl.classList.add('current');
    currentPoll.append(pollEl);
}
function displayPolls() {
    pastPoll.textContent = '';
    for (let pastPollObj of past) {
        const pastPollEl = renderPoll(pastPollObj.question, pastPollObj.poll1, pastPollObj.poll2, pastPollObj.count1, pastPollObj.count2);
        pastPoll.classList.add('past-poll');
        pastPoll.append(pastPollEl);
    }
}