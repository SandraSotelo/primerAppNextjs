import { notFound } from "next/navigation";

//Esta va a ser la página dinámica que se me genera a partir de las rutas dinámicas.



export async function generateStaticParams(){  // este nombre de la función si esobligatorio en react, tal cual como se escribió
//En esta función estoy generando los parámetros estaticos, necesito retornar los parámetros estaticos
//Lo que hace el generateStaticParams es recorrerme la información y obtenerme los identificadores para luego ir generando las páginas que va a tener que generar de forma automatica    
const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()) //aqui ahoramos lineas de codigo en relación a lo que generalmente se hace que es implementar el if para validar la respuesta y mostrar error etc.. De esta manera me quedarían de una vez aqui los post

return posts.map((post) => ({id:String(post.id)}))  //En la función anonima construimos un objeto con un identificador, aqui estamo construyendo las carpetas, los id en los post son número, si observamos los números no tienen comillas, por otro lado las carpetas que se estan creando es con un string pues tenemos una cadena de caracteres al hacer [id], por lo cual debemos convertir esta respuesta a String.  Finalmente aqui retornaría los 100 id que tengo

}

export default async function Page({params}){ //Este Page me recibe algo, como ya tiene la generación automática (la función que creamos arriba), este Page recibe {params} el cual aparece por la función que construí.  Entonces automaticamente Next.js me genera un llamado a esto con esos parámetros para construir las páginas previamente
    const data = await getData(params.id)
//Necesito mostrar un error al usuario por si falla la consulta
if(!data){
    notFound();
}

return (
<div>
    <h1>{data.title}</h1>
    <h3>{data.body}</h3>
</div>

)

}


async function getData(id){ //recibo el id
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);

        if(!res.ok){
            throw new Error("Hubo un error en la red");
        }

        const posts = await res.json();

        return posts;
        
    }catch (error){
        //Hacemos un manejo extra de errores
        console.error(error);
        return null;
    }

}