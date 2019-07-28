import React from 'react'
import Layout from '../../components/Layout'
import sanity from '../../lib/sanity'

import sanityClient from '../../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import Sidebar from '../../components/Sidebar';
import Product from '../../components/Product';

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
const query = `*[_type == "category" && _id == $id] {
  _id,
  title,
  slug,
  description,
  "products": *[_type == "product" && references(^._id)]
}[0]
`

export default class CategoryDetail extends React.Component {

  static async getInitialProps(req) {
    return {
      categories: await sanity.fetch(queryCategories),
      category: await sanity.fetch(query, {id: req.query.pid}),
    }
  }

  render() {

    const {categories, category} = this.props
    return (
      <Layout>
        <Sidebar categories={categories}/>
        <div className="main-content">
          <h1>Products Of {category.title}</h1>
          <ul>
            {category.products.map((product)=>(
              <Product product={product} key={product._id}/>
            ))}
          </ul>
        </div>
        
      </Layout>
    )
  }
}
