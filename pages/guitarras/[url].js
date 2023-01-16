import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";

export default function Producto({ guitarra, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(0);
  const { nombre, descripcion, images, precio } = guitarra[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Cantidad no Válida");
      return;
    }

    //construir objeto con la guitarra seleccionada}
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: images.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };
   //pasando informacion al context

   agregarCarrito(guitarraSeleccionada)

  };

  return (
    <Layout title={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          src={images.data.attributes.url}
          alt={`Imagen Guitarra ${nombre}`}
          width={600}
          height={400}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>$ {precio}</p>
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad:</label>
            <select
              onChange={(e) => setCantidad(+e.target.value)}
              id="cantidad"
            >
              <option value="0">--Selecione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await respuesta.json();

  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=images`
  );
  const { data: guitarra } = await respuesta.json();

  console.log(guitarra);
  return {
    props: {
      guitarra,
    },
  };
}

// export async function getServerSideProps({query: {url}}) {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=images`)
//   const {data: guitarra} = await respuesta.json()

//   console.log(guitarra)
//   return{
//           props:{
//               guitarra
//           }
//       }
//   }
