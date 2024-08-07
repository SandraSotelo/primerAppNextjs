//El Layout es como un template, la manera general en que se me va a ver las páginas.

export default function Layout({children}){

return(
<>

<nav>
    Nav Bar
</nav>

<main>
    {children}
</main>

<footer>
    footer
</footer>


</>
)
}

