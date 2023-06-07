const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const clearBtn = document.querySelector('.clear');
const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const mils = document.querySelector('.mils');
const mil = document.querySelector('.mil');
const span = document.querySelectorAll('p span');
const p = document.querySelector('.p');
const history = document.querySelector('.history');
const btnHis = document.querySelector('.btn-history');
const prehistory = document.querySelector('.prehistory');
const popup = document.querySelector('.pop-up-info');
const questionBtn = document.querySelector('.question');
const brushBtn = document.querySelector('.brush');
const colors = document.querySelector('.colors');
const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.buttons button');
const h2 = document.querySelector('.prehistory h2');
const blueBtn = document.querySelector('.blue');
const orangeBtn = document.querySelector('.orange');
const limeBtn = document.querySelector('.lime');
const yellowBtn = document.querySelector('.yellow');
let num = 0;
let num2 = 0;
let num3 = 0;

let root = document.documentElement;


const start = () => {
	num++;
	mil.textContent = num;
	seconds.textContent = num2;
	minutes.textContent = num3;
	if (num == 100) {
		num = 0;
		num2++;
	}

	if (num2 == 60) {
		num2 = 0;
		num3++;
	}

	if (num > 9) {
		mils.textContent = '';
	}

	if (num2 > 9) {
		sec.textContent = '';
	}

	if (num2 < 9) {
		sec.textContent = '0'
	}

	if (num3 > 9) {
		min.textContent = '';
	}
};

const createHis = () => {
	if (num !== 0 ) {
		hisEl = document.createElement('p');
		history.append(hisEl);
		hisEl.classList.add('hisText');
		hisEl.textContent = p.textContent;
	} 
	
};

const hisWidth = () => {
	prehistory.classList.toggle('history-roll');
	btnHis.classList.toggle('btn-animation');
};

const check = () => {
	if (playBtn.classList.contains('clicked')) {
		return;
	} else {
		const timer = setInterval(start, 10);
		pauseBtn.addEventListener('click', () => {
			clearInterval(timer);
			playBtn.classList.remove('clicked');
		});
		stopBtn.addEventListener('click', () => {
			num = 0;
			num2 = 0;
			num3 = 0;
			span.forEach((el) => {
				el.textContent = 0;
			});
			clearInterval(timer);
			playBtn.classList.remove('clicked');
		});
	}
	playBtn.classList.add('clicked');
};

const clearHistory = () => {
	history.textContent = '';
};

const showPopUp = () => {
	popup.classList.toggle('show-pop-up');
	colors.classList.remove('show-colors')
};

const showColors = () => {
	colors.classList.toggle('show-colors');
	popup.classList.remove('show-pop-up')
};


brushBtn.addEventListener('click', showColors);
questionBtn.addEventListener('click', showPopUp);
clearBtn.addEventListener('click', clearHistory);
btnHis.addEventListener('click', hisWidth);
playBtn.addEventListener('click', check);
stopBtn.addEventListener('click', createHis);
blueBtn.addEventListener('click', () => {
	root.style.setProperty('--main-color', 'royalblue')
})
orangeBtn.addEventListener('click', () => {
	root.style.setProperty('--main-color', 'orangered')
})
yellowBtn.addEventListener('click', () => {
	root.style.setProperty('--main-color', 'gold')
})
limeBtn.addEventListener('click', () => {
	root.style.setProperty('--main-color', 'lime')
})