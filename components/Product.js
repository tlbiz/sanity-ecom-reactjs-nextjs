import React from 'react'
import Link from 'next/link'
import sanityClient from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import styles from './styles/product'



const imageBuilder = imageUrlBuilder(sanityClient)

function imageUrlFor(source) {
  return imageBuilder.image(source)
}

export default class Product extends React.Component {
  render() {
    const { product } = this.props
    const image = product.defaultProductVariant && product.defaultProductVariant.images && product.defaultProductVariant.images[0]
    return (
      <div className="product">
        <Link  href="/product/[pid]" as={`/product/${product.slug.current}`}>
          <a>   
            <img
              className="poster"
              src={imageUrlFor(image).ignoreImageParams().width(280)} alt={`Product Image for ${product.title}`}
            />
            </a>
        </Link>
        <h3>{product.title}</h3>
        <style jsx>{styles}</style>

      </div>
    )
  }
}