
db.createCollection('users')
db.users.insertMany([
    {
    nombres: "Alejo",
    apellidos: "Ruiz",
    correo: "alejo@test.com",
    genero: "M",
    edad: 17
    }      
]);

db.users.find();
// select * from users

db.users.find({edad:{$eq:20}});
// select * from users where edad = 20

db.users.find({edad:{$ne:20}});
// select * from users where edad!= 20 

db.users.find({edad:{$gt:20}});
// select * from users where edad > 20

db.users.find({edad:{$lt:20}});
// select * from users where edad < 20

db.users.find({edad:{$gte:20}});
// select * from users where edad >= 20

db.users.find({edad:{$lte:20}});
// select * from users where edad <= 20

db.users.find({edad:{$in:[7,14,17]}});
// select * from users where edad in (5,10,15)

db.users.find({edad:{$nin:[7,14,17]}});
// select * from users where edad not in (5,10,15)

db.users.find({edad:{$exists:true}});
// select * from users where edad is not null

db.users.find({edad:{$exists:false}});
// select * from users where edad is null 

// db.users.find({nombres:{$regex :/^alejo\d+$/}});

db.users.find(
    {$and:
    [
        {edad:{$gt: 20}},
        {edad:{$lt: 30}}
    ]}
);

                                    // ACTIVIDAD // 

//1.Obtener todos los usuarios que sean mayores de 18 años
db.Ejercicios1.find({edad:{$gt:18}});

//2.Obtener todos los usuarios que sean de Londres o de París.
db.Ejercicios1.find({ciudad:{$in:["Londres","París"]}});

//3.Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
db.Ejercicios1.find(
    {$and:
    [
        {salario:{$gt:2000}},
        {edad:{$lt:30}}
    ]}
);

//4.Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
db.Ejercicios1.find(
    {$and:
    [
        {país:{$eq:"España"}},
        {salario:{$gt:3000}}
    ]}
);

//5.Obtener todos los usuarios que tengan entre 25 y 35 años.
db.Ejercicios1.find(
    {$and:
    [
        {edad:{$gte:25}},
        {edad:{$lte:35}}
    ]}
);

//6.Obtener a todos los usuarios que no sean de Estados Unidos.
db.Ejercicios1.find({país:{$not:{$eq:"Estados Unidos"}}});

//7.Obtener a tos que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
db.Ejercicios1.find(
    {$and:
    [
        {país:{$eq:"Londres"}},
        {$or:
        [
            {salario:{$gt:2500}},
            {edad:{$gt:30}}
        ]}
    ]}
);

//8.Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
db.Ejercicios1.find(
    {$and:
    [
        {país:{$eq:"Australia"}},
        {peso:{$gt:140}}     
    ]}
);

//9.Obtener a todos los usuarios que no sean de Londres ni de París.
db.Ejercicios1.find(
    {$and:
    [
        {país:{$ne:"Londres"}},
        {país:{$ne:"París"}}
    ]}
);

//10.Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.Ejercicios1.find(
    {$or:
    [
        {edad:{$gt:40}},
        {salario:{$lt:2000}}
    ]}
);

//11.Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.Ejercicios1.find(
    {$and:
    [
        {país:{$eq:"Canadá"}},
        {$or:
        [
            {salario:{$gt:4000}},
            {altura:{$gt:180}}
        ]}
    ]}
);

//12.Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
db.Ejercicios1.find(
    {$and:
    [
        {país:{$eq:"Italia"}},
        {edad:{$gte:20}},
        {edad:{$lte:30}}
    ]}
);

//13.Obtener todos los usuarios que no tengan un correo electrónico registrado.
db.Ejercicios1.find({correo:{$exists:false}});

//14.Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.Ejercicios1.find(
    {$and:
    [
        {país:{$eq:"Francia"}},
        {salario:{$gt:3000}},
        {salario:{$lt:5000}}
        
    ]}
);

//15.Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
db.Ejercicios1.find(
    {$and:
    [
        {país:{$eq:"Brasil"}},
        {$or:
        [
            {peso:{$lt:120}},
            {peso:{$gt:140}}
        ]}
    ]}
);

//16.Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
db.Ejercicios1.find(
    {$and:
    [
        {edad:{$lt:25}},
        {$or:
        [
            {país:{$eq:"Argentina"}},
            {país:{$eq:"Chile"}}
        ]}
    ]}
);

//17.Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
db.Ejercicios1.find(
    {$and:
    [
        {país:{$ne:"España"}},
        {país:{$ne:"México"}},
        {salario:{$lt:3000}}
    ]}
);

//18.Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
db.Ejercicios1.find(
    {$and:
    [
        {país:{$eq:"Alemania"}},
        {$or:
        [
            {salario:{$lt:4000}},
            {edad:{$gt:35}}
        ]}
    ]}
);

//19.Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.Ejercicios1.find(
    {$and:
    [
        {país:{$ne:"Colombia"}},
        {altura:{$lt:170}}
    ]}
);

//20.Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.Ejercicios1.find({salario:{$exists:false}});

                                        // ACTIVIDAD II P1 //

//1.Incrementar el salario de todos los usuarios en un 10%.

//2.Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".

//3.Agregar el correo electrónico "nuevo@riwi.com" al usuario con nombre "Juan" y apellido "Perez".

//4.Actualizar la edad del usuario con correo electrónico "ejemplo@riwi.es" a 35 años.

//5.Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".

//6.Aumentar la altura de todos los usuarios en 5 centímetros.

//7.Cambiar el apellido del usuario con correo electrónico "otro@riwi.net" a "González".

//8.Actualizar el peso del usuario con nombre "Maria" a 140 libras.

//9.Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.

//10.Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".

//11.Cambiar la edad de todos los usuarios menores de 30 años a 30 años.

//12Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.

//13.Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".

//14.Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".

//15.Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.

//16.Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.

//17.Incrementar el salario de los usuarios que viven en "London" en un 25%.

//18.Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".

//19.Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".

//20.Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".


                                        // ACTIVIDAD II P2 //
//1.Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.                                      
db.Ejercicios1.deleteMany({salario:{$lt:2000}});

//2.Eliminar usuarios que tienen una edad menor que 25 años.

//3.Borrar todos los usuarios que viven en "París".

//4.Eliminar usuarios que tienen un peso superior a 180 libras.

//5.Eliminar usuarios que tienen una altura inferior a 160 centímetros.

//6.Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".

//7.Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".

//8.Eliminar usuarios que no tienen una dirección de correo electrónico registrada.

//9.Eliminar usuarios que viven en "Tokyo".

//10.Borrar todos los usuarios que son menores de 18 años.

//11.Eliminar usuarios que tienen un salario igual a 0.

//12.Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.

//13.Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".

//14.Borrar usuarios que viven en "Bello" y tienen más de 50 años.

//15.Eliminar todos los usuarios que tienen el apellido "González".

//16.Borrar usuarios que tienen una edad superior a 70 años.

//17.Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.

//18.Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.

//19.Eliminar usuarios que tienen una edad igual a 30 años.

//20.Borrar usuarios que tienen una altura superior a 190 centímetros.





                                         // Datos //                            

db.Ejercicios1.insertOne(
{
    nombre: "Andres",
    apellidos: "Herrera",
    correo: "Andres@example.com",
    ciudad: "Sao Pablo",
    país: "Brasil",
    salario: 3400, 
    edad: 30,
    altura: 160,
    peso: 168
});

db.createCollection('Ejercicios1');
db.Ejercicios1.insertMany([
{
    nombre: "Alejo",
    apellidos: "Ruiz",
    correo: "alejo@example.com",
    ciudad: "Medellín",
    país: "Colombia",
    salario: 2000, 
    edad: 24,
    altura: 178,
    peso: 140
},
{
    nombre: "María",
    apellidos: "Gómez",
    correo: "maria@example.com",
    ciudad: "Londres",
    país: "Reino Unido",
    salario: 3000,
    edad: 28,
    altura: 165,
    pesoLibras: 130
 },
 {
    nombre: "Pablo",
    apellidos: "Martinez",
    correo: "pablo@example.com",
    ciudad: "París",
    país: "Francia",
    salario: 2500,
    edad: 30,
    altura: 180,
    pesoLibras: 150
 },
 {
    nombre: "Ana",
    apellidos: "López",
    correo: "ana@example.com",
    ciudad: "Madrid",
    país: "España",
    salario: 4000,
    edad: 35,
    altura: 170,
    pesoLibras: 140
 },
 {
    nombre: "John",
    apellidos: "Smith",
    correo: "john@example.com",
    ciudad: "New York",
    país: "Estados Unidos",
    salario: 6000,
    edad: 40,
    altura: 185,
    pesoLibras: 160
 },
 {
    nombre: "Alice",
    apellidos: "Johnson",
    correo: "alice@example.com",
    ciudad: "Sydney",
    país: "Australia",
    salario: 5500,
    edad: 45,
    altura: 175,
    pesoLibras: 170
 },
 {
    nombre: "Michael",
    apellidos: "Brown",
    correo: "michael@example.com",
    ciudad: "Toronto",
    país: "Canadá",
    salario: 4800,
    edad: 32,
    altura: 190,
    pesoLibras: 180
 },
 {
    nombre: "Giuseppe",
    apellidos: "Russo",
    correo: "giuseppe@example.com",
    ciudad: "Roma",
    país: "Italia",
    salario: 3500,
    edad: 25,
    altura: 175,
    pesoLibras: 160
 },
 {
    nombre: "Claire",
    apellidos: "Dupont",
    correo: "claire@example.com",
    ciudad: "París",
    país: "Francia",
    salario: 3200,
    edad: 28,
    altura: 168,
    pesoLibras: 135
 },
 {
    nombre: "Pedro",
    apellidos: "Silva",
    correo: "pedro@example.com",
    ciudad: "São Paulo",
    país: "Brazil",
    salario: 4200,
    edad: 38,
    altura: 175,
    pesoLibras: 145
 },
 {
     nombre: "Sofía",
     apellidos: "Fernández",
     correo: "sofia@example.com",
     ciudad: "Buenos Aires",
     país: "Argentina",
     salario: 3800,
     edad: 36,
     altura: 162,
     pesoLibras: 125
 },
 {
     nombre: "Diego",
     apellidos: "González",
     correo: "diego@example.com",
     ciudad: "Santiago",
     país: "Chile",
     salario: 2800,
     edad: 22,
     altura: 180,
     pesoLibras: 150
 },
 {
     nombre: "Carolina",
     apellidos: "Hernández",
     correo: "carolina@example.com",
     ciudad: "Mexico City",
     país: "México",
     salario: 3400,
     edad: 26,
     altura: 165,
     pesoLibras: 140
 },
 {
     nombre: "Hans",
     apellidos: "Schmidt",
     correo: "hans@example.com",
     ciudad: "Berlín",
     país: "Alemania",
     salario: 5000,
     edad: 42,
     altura: 175,
     pesoLibras: 160
 },
 {
     nombre: "Camila",
     apellidos: "Herrera",
     correo: "camila@example.com",
     ciudad: "Bogotá",
     país: "Colombia",
     salario: 2600,
     edad: 32,
     altura: 170,
     pesoLibras: 135
 },
 {
     nombre: "Raj",
     apellidos: "Patel",
     correo: "raj@example.com",
     ciudad: "Mumbai",
     país: "India",
     salario: 4500,
     edad: 34,
     altura: 172,
     pesoLibras: 155
 },
 {
     nombre: "Luis",
     apellidos: "García",
     correo: "luis@example.com",
     ciudad: "Londres",
     país: "Reino Unido",
     salario: 3800,
     edad: 31,
     altura: 175,
     pesoLibras: 155
 },
 {
     nombre: "Elena",
     apellidos: "Duval",
     correo: "elena@example.com",
     ciudad: "París",
     país: "Francia",
     salario: 4200,
     edad: 29,
     altura: 168,
     pesoLibras: 130
 },
 {
     nombre: "Juan",
     apellidos: "López",
     correo: "juan@example.com",
     ciudad: "Madrid",
     país: "España",
     salario: 5800,
     edad: 39,
     altura: 180,
     pesoLibras: 165
 },
 {
     nombre: "Emily",
     apellidos: "White",
     correo: "emily@example.com",
     ciudad: "Londres",
     país: "Reino Unido",
     salario: 3600,
     edad: 33,
     altura: 170,
     pesoLibras: 140
 },
 {
     nombre: "Olivier",
     apellidos: "Martin",
     correo: "olivier@example.com",
     ciudad: "París",
     país: "Francia",
     salario: 4700,
     edad: 37,
     altura: 175,
     pesoLibras: 150
 },
 {
     nombre: "Inés",
     apellidos: "Fernández",
     correo: "ines@example.com",
     ciudad: "Madrid",
     país: "España",
     salario: 3900,
     edad: 27,
     altura: 163,
     pesoLibras: 130
 },
 {
     nombre: "William",
     apellidos: "Johnson",
     correo: "william@example.com",
     ciudad: "New York",
     país: "Estados Unidos",
     salario: 5200,
     edad: 36,
     altura: 182,
     pesoLibras: 170
 },
 {
     nombre: "Olivia",
     apellidos: "Smith",
     correo: "olivia@example.com",
     ciudad: "Sydney",
     país: "Australia",
     salario: 4900,
     edad: 43,
     altura: 168,
     pesoLibras: 150
 },
 {
     nombre: "Xavier",
     apellidos: "Dubois",
     correo: "xavier@example.com",
     ciudad: "Toronto",
     país: "Canadá",
     salario: 4300,
     edad: 34,
     altura: 187,
     pesoLibras: 175
 },
 {
     nombre: "Leonardo",
     apellidos: "Rossi",
     correo: "leonardo@example.com",
     ciudad: "Roma",
     país: "Italia",
     salario: 3700,
     edad: 29,
     altura: 177,
     pesoLibras: 160
 },
 {
     nombre: "Juliette",
     apellidos: "Laurent",
     correo: "juliette@example.com",
     ciudad: "París",
     país: "Francia",
     salario: 3200,
     edad: 26,
     altura: 166,
     pesoLibras: 125
 },
 {
     nombre: "Carlos",
     apellidos: "Oliveira",
     correo: "carlos@example.com",
     ciudad: "São Paulo",
     país: "Brazil",
     salario: 4400,
     edad: 40,
     altura: 172,
     pesoLibras: 155
 },
 {
     nombre: "Mateo",
     apellidos: "Fernández",
     correo: "mateo@example.com",
     ciudad: "Buenos Aires",
     país: "Argentina",
     salario: 4000,
     edad: 32,
     altura: 167,
     pesoLibras: 140
 },
 {
     nombre: "Valentina",
     apellidos: "González",
     correo: "valentina@example.com",
     ciudad: "Santiago",
     país: "Chile",
     salario: 2900,
     edad: 24,
     altura: 175,
     pesoLibras: 145
 },
 {
     nombre: "Santiago",
     apellidos: "García",
     correo: "santiago@example.com",
     ciudad: "Mexico City",
     país: "México",
     salario: 3500,
     edad: 28,
     altura: 170,
     pesoLibras: 135
 },
 {
     nombre: "Felix",
     apellidos: "Müller",
     correo: "felix@example.com",
     ciudad: "Berlín",
     país: "Alemania",
     salario: 5100,
     edad: 44,
     altura: 178,
     pesoLibras: 165
 },
 {
     nombre: "Sofia",
     apellidos: "Gutiérrez",
     correo: "sofia@example.com",
     ciudad: "Bogotá",
     país: "Colombia",
     salario: 2700,
     edad: 30,
     altura: 172,
     pesoLibras: 140
 },
 {
     nombre: "Rahul",
     apellidos: "Singh",
     correo: "rahul@example.com",
     ciudad: "Mumbai",
     país: "India",
     salario: 4600,
     edad: 36,
     altura: 174,
     pesoLibras: 150
 }
]);