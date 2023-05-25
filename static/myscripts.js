// all these functions have the curr-selection from any dropdown menu saved in the variable curr_selection
// it then updates the webpage to align with the users selection

function filterSort(option){
    let curr_selection = document.getElementById('sort-selection');
    curr_selection.textContent=option;
}

function filterOffice(option){
    let curr_selection = document.getElementById('office-selection');
    curr_selection.textContent=option;
}

function filterStatus(option){
    let curr_selection = document.getElementById('status-selection');
    curr_selection.textContent=option;
}

// these two are just for the index.html of job-positions (not relevant to current applicants)
function filterJobStat(option){
    let curr_selection = document.getElementById('job-status-selection');
    curr_selection.textContent=option;
}

function filterDept(option){
    let curr_selection = document.getElementById('dept-selection');
    curr_selection.textContent=option;
}

