const fetch = (url) => {
    return new Promise((resolve,reject)=> {
        const xhr = new XMLHttpRequest();

        xhr.open('GET',url,true)

        xhr.onload = () => {
            if(xhr.status === 200){
                resolve(xhr.response)
            }else{
                reject('успешна')
            }
        }
        xhr.send()
    })
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => JSON.parse(response))
.then(data => console.log(data))
