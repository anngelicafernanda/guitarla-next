import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, guitarLA, tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        
        <div className={styles.contenido}>
         <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vel lacus quis tortor placerat dignissim sit amet vel mi.
              Curabitur lacinia ullamcorper ligula vel placerat. Mauris ut
              aliquam augue, maximus sodales mauris. Nam eu massa nec lorem
              porta ornare. Nulla tincidunt nisl placerat nunc bibendum dapibus.
              Nam efficitur lacus in lorem dictum lobortis. Integer laoreet
           
            </p>
            <p>
              Nam consequat rhoncus nibh eget ornare. Cras facilisis
              pellentesque mollis. Etiam ornare sed nulla at feugiat.
              Suspendisse tincidunt ligula odio, eget condimentum lorem tempor
              at. Quisque a lectus quis libero ultrices aliquam nec feugiat
              purus. Morbi in elit ut nulla efficitur laoreet. Aenean ac nisi in
              augue dignissim faucibus nec vel ipsum. In at accumsan augue.
             
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
