let myKey = localStorage.getItem('tstKey');

if (myKey === null) {
	var usrName = prompt(`Добро пожаловать! Назовите, пожалуйста, ваше имя`);
	var curDate = new Date();

	const jsonString = `
  {
    "name": ${usrName},
    "date": ${curDate}
  }`;

	localStorage.setItem('tstKey', jsonString);
} else {
	alert(`Добрый день, ${myKey.name}! Давно не виделись. В последний раз вы были у нас ${myKey.date}`);

	const jsonString = `
  {
    "name": ${myKey.name},
    "date": ${new Date()}
  }`;

	localStorage.setItem('tstKey', jsonString);
}


