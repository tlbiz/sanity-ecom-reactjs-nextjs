import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import sanity from '../lib/sanity'
// import styles from './styles/movies'
// import listStyles from './styles/list'
import sanityClient from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

const imageBuilder = imageUrlBuilder(sanityClient)

function imageUrlFor(source) {
  return imageBuilder.image(source)
}


export default class HomePage extends React.Component {


  render() {
    return (
      <Layout>
       <div className="welcome">
          Welcome to The Greatest Store
        </div> 
      </Layout>
    )
  }
}
