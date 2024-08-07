import Image from "next/image"
import Link from "next/link"

// En los links, con Link accedo directamente a la memoria RAM por eso la pagina no se recarga
// En los links, con ancla recargo la página por eso se demora un poquito más, es html puro

//SEO

export const metadata = {
    title: "Primer Post"

}
export default function PrimerPost(){
    return (
        <div>
            <h1>Este es el primer post</h1>
            <Image src="/img/imagen1.jpg" width={300} height={300}/>
            <Link href="/">Ir a la pagina principal</Link>
            <br></br>
            <a href="/">Ahora usando un link con ancla</a>
            
        </div>
      
    )
}