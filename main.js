// 1.Pintar usuarios

// En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. Leyendo su documentación, deberás hacer lo siguiente:

// 1 - Imprimir por consola la lista de usuarios.

axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));



// 2 - Imprimir por consola solo el nombre de los usuarios.

axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {

        const data = res.data;

        data.forEach(element => { 
            const userName = element.name.split(' ');
            console.log(userName[0]);
            
        });
    })
    .catch((err) => console.log(err));


//TODO: 3 - Crea una variable global users y cuando hagas la petición axios rellénala con la respuesta de la api (todo esto fuera de una función)


// Inicializamos un array vacío (donde guardaremos los usuarios)
let users = [];

// Opción A:
///////////

axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        return res.data
    })
    .then(data => {
        users = data
        console.log(users)
    .catch((err) => console.log(err))
})

// Opción B:
///////////

// Incializamos la función getUsers
const getUsers1 = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        return res.data
    })
    .catch((err) => console.log(err))
}

// LLamamos a la función getUsers
getUsers1().then(data => {
    users = data
    console.log(users)
});




//TODO: 4 - Crea una función que muestre por consola la variable global que habías creado

// Incializamos la función getUsers
const getUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        return res.data
    })
    .then(data => {
        users = data
        console.log(users) // Pintamos los usuarios por consola
    })
    .catch((err) => console.log(err))

}

// LLamamos a la función getUsers
getUsers()



//TODO: 5 - Crea un botón que cuando lo cliques ejecute la función que habías creado

//TODO: 6 - Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM ( en el HTML)

// Recuerda que para estos ejercicios deberás utilizar Axios.