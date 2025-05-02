import React from 'react'
import { Card,CardHeader,CardContent,CardTitle,CardDescription, CardFooter } from '@/components/ui/card'
import Link from 'next/link'

interface ProductItemProps{
  $id: string,
    name: string,
  price: number,
  long_description: string,
  short_description: string,
  images: string[]
}

const ProductItem = ({product}:{product:ProductItemProps}) => {
  return (
    <Link href={`/product-details/${product.$id}`}>
    
    <Card> 


        <CardHeader>
            {product.name}
        </CardHeader>

        <CardContent>
            <img src={product.images[0]} alt={product.name} />
        </CardContent>

        <CardFooter className='flex justify-between items-center'> 
            {product.price} <button className='bg-blue-800 text-white p-2 rounded-lg pointer-cursor hover:bg-blue-600'> Add to Cart </button>
        </CardFooter>
    </Card>
    </Link>
  )
}

export default ProductItem