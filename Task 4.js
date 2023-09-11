let number;

function setNumber() {
    number = Math.ceil(Math.random() * 100);
}

const myPromise = new Promise ((resolve,reject) => {
    setTimeout(setNumber(), 3000);
    if (number % 2 == 0) {
        resolve (`Завершено успешно. Сгенерированное число - ${number}`);
    } else {
        reject (`Завершено с ошибкой. Сгенерированное число - ${number}`);
    }
});

myPromise
    .then((result) => {
        console.log('Обработка resolve', result);
    })
    .catch((error) => {
        console.log('Обработка reject', error);
    });
        
    