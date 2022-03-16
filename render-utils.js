export function renderPoll(poll1, poll2, count1, count2) {
    const div = document.createElement('div');
    const poll1Div = renderOption(poll1, count1);
    const poll2Div = renderOption(poll2, count2);
    div.append(poll1Div, poll2Div);
    div.classList.add('polling');
    return div;
}

export function renderOption(poll, count) {
    const pollDiv = document.createElement('div');
    const pollOpDiv = document.createElement('p');
    const countDiv = document.createElement('p');

    pollOpDiv.textContent = poll;
    countDiv.textContent = count;
    pollDiv.append(pollOpDiv, countDiv);
    return pollDiv;
}