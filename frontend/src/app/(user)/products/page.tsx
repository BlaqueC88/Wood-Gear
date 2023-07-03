
import { Hero } from '@src/components/Hero/Hero'
import { AllProducts } from '@src/features/products'
import { IProduct } from '@src/model';
import { client } from '@utils/sanity.client';
import { groq } from 'next-sanity';
import React, { useState } from 'react'

const getAllProductsQueries: string = `
    *[_type == "product"] {
        "id": _id,
        name,
        description,
        price,   
        rating,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
    }
`;

const getProductsAsync = () => {
  return client.fetch(groq`${getAllProductsQueries}`);
};

export const revalidate = 60; // revalidate this page every 60 seconds

const ProductsPage = async () => {

  const products: IProduct[] = await getProductsAsync();

  return (
    <>
      <Hero 
        heading="Best and Quality Products"
        description="Affordability, Durability, Fast and Convenient Delivery, Free Shipping and more"
        imageUrl="/images/joycoast-wood-watches-sunglasses-lMiA3i5VquM-unsplash.jpg"
        btnLabel="View All Categories"
        btnLink="/categories"
      />

      <AllProducts products={products} />
    </>
  )
};

export default ProductsPage;