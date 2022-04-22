const getFetch = (url) => {
    return new Promise((resolve,reject)=> {
        const xhr = new XMLHttpRequest()

        xhr.open('GET',url,true)

        xhr.onload=()=> {
            if(xhr.status === 404){
                resolve(xhr.response)
            }else{
                reject('произошла ошибка ')
            }
            xhr.onerror  = () => {
                reject('произошла ошибка ')
            }
        }
         xhr.send()
    })
}


getFetch('https://jsonplaceholder.typicode.com/users')
        .then(response => JSON.parse(response))
        .then(data => console.log(data))

        