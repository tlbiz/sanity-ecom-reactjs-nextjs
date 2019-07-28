import React from 'react'
import Layout from '../../components/Layout'
import sanity from '../../lib/sanity'
import BlockContent from '@sanity/block-content-to-react'

import sanityClient from '../../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import Sidebar from '../../components/Sidebar';
import styles from '../../components/styles/details';

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
const query = `*[_type == "product" && slug.current == $id] {
  _id,
  title,
  slug,
  body,
  price,
  defaultProductVariant,
  variants,
  // categories,
  "categories": *[_type == "category" && references(^._id)]
}[0]
`
const serializers = {
  types: {
    localeBlockContent: props => {
      const {node} = props
      if (!node) {
        return false
      }
      const {en} = node
      if (!en || node.en.length === 0) {
        return false
      }
      return (
        <div className="description">
          {node.en && node.en.map((lang)=>(
            <BlockContent blocks={lang} serializers={serializers} key={lang._key} />
          ))}

        </div>
      )
    }
  }
}
export default class ProductDetail extends React.Component {

  static async getInitialProps(req) {
    return {
      categories: await sanity.fetch(queryCategories),
      product: await sanity.fetch(query, {id: req.query.pid}),
    }
  }

  render() {

    const {categories, product} = this.props
    const variant = product.defaultProductVariant
    const image = variant && variant.images && variant.images[0]

    return (
      <Layout>
        <Sidebar categories={categories}/>
        <div className="main-content">
          <h1>Product Details: {product.title} </h1>
          <div className="product-content">
              <div className="product-images">
                <img
                    className="large-image"
                    src={imageUrlFor(image).ignoreImageParams().width(280)} alt={`Product Image for ${product.title}`}
                  />
                  <div>
                    <ul>
                      {product.defaultProductVariant.images.map((image)=>(
                        <li key={image._key}>
                          <img
                            className="thumb-image"
                            src={imageUrlFor(image).ignoreImageParams().width(80)} alt={`Thumbnail`}
                          />                        

                        </li>
                      ))}
                    </ul>
                  </div>
              </div>          
              <div className="product-information">
                  <div>
                    Associated Categories:
                    {product.categories.map((cat)=>(
                      <span key={cat._id}>{cat.title}</span>
                    ))}
                  </div>
                  <div>
                    Price: <strong>
                      ${variant.price}
                    </strong>
                  </div>
                  <div>
                  <BlockContent blocks={product.body} serializers={serializers} />
                  </div>
              </div>
          </div>
        </div>
        <style jsx>{styles}</style>

      </Layout>
    )
  }
}
