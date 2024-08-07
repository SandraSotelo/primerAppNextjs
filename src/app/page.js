import Image from "next/image";
import Link from "next/link";

export default function Home() {
  //Usamos Taildwild CSS para dar formato de la siguiente manera:
  //flex=para que sea totalmente responsivo
  //flex-col=Columnas flexibles
  //item-center= para que me centre todos los items
  //justify-between= si hay varios items que me los justifique entre ellos
  //p-24=tamaño del texto

  return (
    <main className="flex min-h-screen flex-col item-center justify-between p-24">
      <h1>Bienvenidos al blog</h1>
      <Link href="/blog">Ir al blog</Link>
    </main>
  );
}
