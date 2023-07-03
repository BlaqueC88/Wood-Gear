import { products } from '@mocks/products';
import { CustomBreadcrumb } from '@src/components/CustomBreadcrumb/CustomBreadcrumb';
import { Hero } from '@src/components/Hero/Hero';
import { AllProducts } from '@src/features/products';
import { defaultBreadcrumbItems } from '@src/helpers';
import { ICategory, IProduct } from '@src/model';
import { client } from '@utils/sanity.client';
import { groq } from 'next-sanity';
import React from 'react'

const query: string = groq`
    *[_type == "product" && references($id)] {
        ...,
        "id": _id,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{ name, "image": image.asset->url  },
    }
`;

export const revalidate = 60; // revalidate this page every 60 seconds

type Props = {
  params: {
    id: string;
  };
};

async function CategoryPage ({ params: { id } }: Props) {

  const products: IProduct[] = await client.fetch(query, { id });

  return (
    <>
      <Hero 
        heading={products[0].category!.name}
        description={`Best and Affordable ${products[0].category!.name}`}
        imageUrl={products[0].category!.image}
        btnLabel="View All Categories"
        btnLink="/categories" 
      />
      <CustomBreadcrumb 
        items={[
          ...defaultBreadcrumbItems, 
          { name: products[0].category!.name, link: '#' }
        ]}
      />
      <AllProducts products={products}/>
    </>
  )
}

export default CategoryPage;

export async function generateStaticParams() {
  const query = groq`*[_type == "category"] {
    "id": _id
  }`;

  const categories: ICategory[] = await client.fetch(query);

  return categories.map((category) => ({
    id: category.id,
  }));
}