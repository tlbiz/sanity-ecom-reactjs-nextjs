import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import sanity from '../lib/sanity'
// import styles from './styles/products'
// import listStyles from './styles/list'
import sanityClient from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import Sidebar from '../components/Sidebar';
import Product from '../components/Product';

const imageBuilder = imageUrlBuilder(sanityClient)

function imageUrlFor(source) {
  return imageBuilder.image(source)
}
const queryCategories = `*[_type == "category"] {
  _id,
  title,
  slug,
  description,
}[0...50]
`
const query = `*[_type == "product"] {
  _id,
  title,
  slug,
  body,
  defaultProductVariant,
  variants,
  categories,
}[0...50]
`

export default class Products extends React.Component {

  static async getInitialProps() {
    return {
      categories: await sanity.fetch(queryCategories),
      products: await sanity.fetch(query)
    }
  }

  render() {
    const {categories, products} = this.props
    return (
      <Layout>
        <Sidebar categories={categories}/>
        <div className="main-content">
           {products.map((product)=> (
             <Product product={product} key={product._id}/>
           ))}
        </div>        
      </Layout>
    )
  }
}
