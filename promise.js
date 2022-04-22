const number = 26;
const promise = new Promise((resolve,reject) => {
    if(number === 26){
        resolve('успешно')
    }else{
        reject('ошибка')
    }
})

const onFulfilled = (text) => {
            console.log(text);
    }
        const onRejected  = (text) => {
            console.log(text);
    }

    promise.then(onFulfilled,onRejected);