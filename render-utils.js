export function renderPoll(question, poll1, poll2, count1, count2) {
    const div = document.createElement('div');
    const quesDiv = renderOption(question);
    const poll1Div = renderOption(poll1, count1);
    const poll2Div = renderOption(poll2, count2);
    div.append(quesDiv, poll1Div, poll2Div);
    div.classList.add('polling');
    return div;
}

export function renderOption(ques, poll, count) {
    const pollDiv = document.createElement('div');
    const questioDiv = document.createElement('p');
    const pollOpDiv = document.createElement('p');
    const countDiv = document.createElement('p');

    questioDiv.textContent = ques;
    pollOpDiv.textContent = poll;
    countDiv.textContent = count;
    pollDiv.append(questioDiv, pollOpDiv, countDiv);
    return pollDiv;
}