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
    .catch((err) => console.log(err))    
    .then(data => {
        users = data
        console.log(users)
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


// Opción C: (Paula)
///////////

// Crea una variable global users y cuando hagas la petición axios rellénala con la respuesta de la api 
// (todo esto fuera de una función)
const users2 = [];
axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        users2.length = 0;  
        users2.push(...response.data);
    })
    .catch(error => {
        console.error('Error fetching users:', error);
    });
    //   console.log("El array de users es: ", users);

// Crea una función que muestre por consola la variable global que habías creado
function showUsers() {
    console.log(users2);
}

showUsers()



//TODO: 4 - Crea una función que muestre por consola la variable global que habías creado

// Incializamos la función getUsers
const getUsers2 = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        return res.data
    })
    .then(data => {
        const users = data
        console.log(users) // Pintamos los usuarios por consola
    })
    .catch((err) => console.log(err))

}

// LLamamos a la función getUsers
getUsers2()



//TODO: 5 - Crea un botón que cuando lo cliques ejecute la función que habías creado

// Incializamos la función getUsers3
const getUsersInConsole = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        const users = res.data
        console.log(users) // Pintamos los usuarios por consola
    })
    .catch((err) => console.log(err))

}

const body = document.body;
const btnGetUsersInConsole = document.createElement('button');
btnGetUsersInConsole.setAttribute('id', 'btnGetUsers');
btnGetUsersInConsole.textContent = 'Get all users in console';
body.appendChild(btnGetUsersInConsole);

btnGetUsersInConsole.addEventListener('click', getUsersInConsole);


//TODO: 6 - Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM ( en el HTML)

// Incializamos la función getUsers3
const getUsersInHtml = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        const users = res.data;
        const sectionUsers = document.createElement('section');
        users.forEach((user) => {
            sectionUsers.innerHTML += `<b>id:</b> ${user.id}
                                       <br> <b>name:</b> ${user.name}<br> 
                                       <b>address:</b><br> 
                                       &nbsp; &nbsp; &nbsp; <b>city:</b> ${user.address.city}<br>
                                       &nbsp; &nbsp; &nbsp; <b>geolocalization:</b><br>
                                       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>latitude:</b> ${user.address.geo.lat}<br>
                                       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>longitude:</b> ${user.address.geo.lng}<br>
                                       &nbsp; &nbsp; &nbsp; <b>street:</b> ${user.address.street}<br>
                                       &nbsp; &nbsp; &nbsp; <b>suite:</b> ${user.address.suite}<br>
                                       &nbsp; &nbsp; &nbsp; <b>zipcode:</b> ${user.address.zipcode}<br>
                                       <b>company:</b><br> 
                                       &nbsp; &nbsp; &nbsp; <b>bs:</b> ${user.company.bs}<br>
                                       &nbsp; &nbsp; &nbsp; <b>catch phrase:</b> ${user.company.catchPhrase}<br>
                                       &nbsp; &nbsp; &nbsp; <b>company name:</b> ${user.company.name}<br>
                                       <b>email:</b> ${user.email}<br>
                                       <b>phone:</b> ${user.phone}<br>
                                       <b>username:</b> ${user.username}<br> 
                                       <b>website:</b> ${user.website}<br> 
                                       <br><br>`;
                                       
            body2.appendChild(sectionUsers)
        })
        })
    .catch((err) => console.log(err))

}

const body2 = document.body;
const btngetUsersInHtml = document.createElement('button');
btngetUsersInHtml.setAttribute('id', 'btnGetUsers');
btngetUsersInHtml.textContent = 'Get all users in HTML';
body2.appendChild(btngetUsersInHtml);

btngetUsersInHtml.addEventListener('click', getUsersInHtml);


// Recuerda que para estos ejercicios deberás utilizar Axios.


function helloWorl() {
    console.log("Hello world!")
}
