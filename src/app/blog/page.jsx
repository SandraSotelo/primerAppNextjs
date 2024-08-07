
import Link from "next/link";

//Esta es la página principal

//Procedemos a hacer SEO: optimización para buscadores

//Exactamente como sigue a continuación se debe de escribir:
// Es la información que yo le entrego a los buscadores para que sepan de que se trata la página, sus palabras clavez
export const metadata = {
    title: "Super blog",
    descripcion: "Una descripción del sitio",
    keywords: ["p1", "p2"]  // Estas son las palabras claves
}

//export default function Post(){//Este nombre que pongo es indiferente, aveces significan algo en esta oportunidad no
export default async function Post(){
const data= await getData(); //Llamamos la función pero al tener que usar await la primera linea de esta función Post debe cambiar pues ya se me convierte en función asincrona.
                             //Debo hacer el await porque de lo contrario me quedaría una promesa y no la data.
    
    //En este return yo no podria hacer un ciclo de repetición tradicional para iterar e imprimir la info.
    //La manera en la que yo itero a traves de un arreglo de objetos es diferente:
    //El map que es una función de javascript, me va a iterar sobre todos los objetos indistintamente de como esten ubicados, el itera y por cada objeto opera una función anonima
    //Esto seria en javascript estandar:  {data.map( () => {})  pero en jsx que es una mezcla de todo, entonces las funciones anonimas se definen con parentesis
    //React me obliga a que a los li les ponga una llave, un valor unico que no se repetira, en este caso seria el id
    return(<div>
        <h1>Blog de prueba</h1>
        <p>Este es el contenido del blog</p>
        <br></br>
        <br></br>
        <ul>
            {data.map( ({id, title, body}) => (
                <li key={id}>
                   {/*<h3>{id}--{title}</h3> Esta linea era cuando no teniamos rutas dinamicas y de una sola vez el me imprimia todos los blogs */} 
                    <Link href = {`/blog/${id}`}><h3>{id}--{title}</h3></Link> {/* lo que esta en el href me va a generar por cada elemento un blog/1, blog/2 ...blog/100 */}
                    <p>{body}</p>
                    <br></br>
                </li>
            )) 
            }
        </ul>
    </div>)
}



//Creamos una función asincrona para obtener los datos del servidor.

async function getData(){
    try {
//Usaremoms fetch, fetch es una API de los navegadores que nos permite obtener información de un BackEnd, pero NEXT tiene una implementación especial optimizada de esa API, Es decir, yo uso festch pero no estoy usando directamente el del navegador sino que uso Raper o enboltorio que pone NEXT sobre esa API del bavegador para hacer los llamados más eficientes
//Capturo la información del sitio en esa variable res, mi aplicación hasta que el servidor no responda se queda aqui porque con el await lo que estoy haciendo es bloquear el hilo de ejecución, esto en cierta forma es una desventaja porque 
//eso le resta rendimiento a las aplicaciones pero en este caso el fetch tiene una optimización. Esto es información estatica.  Bloquear el hilo de ejecución mientras esperamos la respuesta del servidor no siempre es la mejor opción (esto lo hace NEXT) por lo cual hay otro Frameworks como Angular donde el manejo es mucho más rico con respecto a las conxiones a las APIS,
//en este  caso por ejemplo Angular sigue ejecutando otras cosas mientras el servidor responde y cuando responde se devuelve. 

const res = await fetch("https://jsonplaceholder.typicode.com/posts")
if(!res.ok){
    throw new Error("Hubo un error en la red");
}

//Convierto la información recibida a formato json y le digo que voy a esperar (await) hasta que termine, si no le pongo el await se me vuelve una promesa y asi no me sirve la información
const posts = await res.json();
return posts;

}catch (error){
console.error(error);
    }
}