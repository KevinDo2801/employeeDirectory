import employees from './employees-optional.js';
import Member from './member.js';

const dropdownElement = document.getElementById('myDropdown');
const searchInput = document.getElementById('search-input');

dropdownElement.addEventListener('change', handleSelectionChange);
searchInput.addEventListener('input', handleSearchInput);

function handleSelectionChange() {
    const selectedOptionText = dropdownElement.options[dropdownElement.selectedIndex].textContent.toLowerCase();
    const allMembers = getAllMembersByOption(selectedOptionText);
    render(allMembers);
}

function handleSearchInput() {
    const selectedOptionText = dropdownElement.options[dropdownElement.selectedIndex].textContent.toLowerCase();
    const searchValue = searchInput.value.toLowerCase();
    const allMembers = getAllMembersByOption(selectedOptionText);
    const filteredMembers = allMembers.filter((member) => member.name.toLowerCase().includes(searchValue));
    render(filteredMembers);
}

function getAllMembersByOption(option) {
    if (option === 'everyone') {
        return employees.flatMap((team) => team.members);
    } else {
        return employees.find((team) => team.team.toLowerCase() === option).members;
    }
}

function getTeamHtml(team) {
    return team.map((member) => {
        const newMember = new Member(member);
        return newMember.getDataHtml();
    }).join('');
}

function render(team) {
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = getTeamHtml(team);
}

handleSelectionChange();
