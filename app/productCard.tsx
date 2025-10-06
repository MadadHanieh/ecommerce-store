import { Product } from '@/lib/mocks'
import React from 'react'
import Image from 'next/image'
import { formatPrice } from '@/lib/utils'

export const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className='border border-gray-300 rounded-lg p-4'>
            <div className="relative aspect-video w-full mb-4">
                <Image src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-auto"
                    fill
                    sizes='(max-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw' />
            </div>
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-lg">{product.description}</p>
            <p className="text-lg font-semibold">{formatPrice(product.price)}</p>
        </div>
    )
}
