const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const currentDay = document.getElementById('current-day');
const currentDate = document.getElementById('current-date');
const progPercent = document.getElementById('progress-fill');
const progFill = document.getElementById('progress-fill');



document.addEventListener('DOMContentLoaded', () => {
	setDates();
	// renderTasks();
});

// document.addEventListener('click', addTask);

// taskInput.addEventListener('keypress', (e) => {
// 	if (e.key === 'Enter')
// 		addTask();
// })

function setDates() {
	const date = new Date();
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	currentDay.textContent = days[date.getDay()];
	currentDate.textContent = `${months[date.getMonth()]}  ${date.getDate()}  ${date.getFullYear()}`;
}