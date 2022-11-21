const hourElement = document.getElementById('hours'),
      minElement = document.getElementById('minutes'),
	  secElement = document.getElementById('seconds');

function updateTime() {
	let hours = new Date().getHours(),
	    minutes = new Date().getMinutes(),
		seconds = new Date().getSeconds();
	
	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;
	
	hourElement.innerText = hours;
	minElement.innerText = minutes;
	secElement.innerText = seconds;
	
	
	setTimeout(()=>{
		updateTime();
	}, 1000)
}

updateTime();