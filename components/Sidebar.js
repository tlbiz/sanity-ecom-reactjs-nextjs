import React from 'react'
import Link from 'next/link'

export default class Sidebar extends React.Component {


  render() {
    const {categories} = this.props

    return (
        <div className="sidebar">
          <ul className="list">
            <li>
              CATEGORIES
            </li>
            {categories && categories.map(category => (
              <li key={category._id} className="list__item">
                <Link  href="/category/[pid]" as={`/category/${category._id}`}>
                  <a>                   
                    <h3>{category.title}</h3>                   
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>       
    )
  }
}
