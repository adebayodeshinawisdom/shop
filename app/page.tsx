"use client"
import ProductItem from "./myReusableComponents/ProductItem";
import {useState, useEffect} from 'react'
import { listProducts} from '@/app/action/appwrite'
import { Loader } from "lucide-react";
import ImageSlider  from "./myReusableComponents/ImageSlider"; 



type productProps = {
  name: string,
  price: number,
  long_description: string,
  short_description: string,
  images: string[]
  $id: string

}
const Home = () =>{

  
  const [products, setProducts] = useState<productProps[] | undefined>([])
  const [loading, setLoading] = useState<boolean>(true)
 
  const fetchProduct = async() => {
    try {
      setLoading(true)
       const response = await listProducts()
       if(!response) throw new Error('No product found')

        const formattedData = response.map((doc)=> (
          {
            name: doc.name,
            price: doc.price,
            long_description: doc.long_description,
            short_description: doc.short_description,
            images: doc.images,
            $id: doc.$id
          }
        ))

        setProducts(formattedData)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchProduct()
  },[])

  return(
   <div className="container mx-auto p-4">

    <div className="mb-10">
    <ImageSlider />

    </div>

    <h1 className="text-2xl font-bold mb-4"> Our Products </h1>
        <p className="text-gray-500 mb-4"> We have got you covered with latest fashion collection </p>
        <hr className="mb-4" />
       
        {/* Loader */}  
{loading && (<div className="flex justify-center items-center h-screen text-blue-600">
            <Loader className="w-24 h-24 animate-spin"/>
          </div>)}
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {products?.map((product, index) =>(
                <ProductItem product={product} key={index} />
              ))}
            </div>

   </div>
  )
}

export default Home;