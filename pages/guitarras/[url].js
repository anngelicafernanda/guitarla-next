import { useRouter } from "next/router"

export default function Producto({guitarra}) {

    console.log(guitarra[0].attributes.nombre)
  return (
    <div>
      [url]
    </div>
  )
}

export async function getStaticPaths(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const {data} = await respuesta.json()

  const paths = data.map(guitarra=>({
    params:{
      url: guitarra.attributes.url
    }
  }))

  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {url}}) {
const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=images`)
const {data: guitarra} = await respuesta.json() 

console.log(guitarra)
return{
        props:{
            guitarra
        }
    }
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