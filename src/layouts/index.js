import React from 'react'
import FontAwesome from 'react-fontawesome'
import Link from 'gatsby-link'
import '../styles/styles.css'

export default ({ data, children }) =>
  <div className='page'>
    <Header {...data.site.siteMetadata} />
    {children()}
  </div>

const Header = ({ title, subtitle, shortBio, social }) =>
  <header className='header'>
    <About title={title} subtitle={subtitle} shortBio={shortBio} />
    <Social data={social} />
  </header >

const About = ({ title, subtitle, shortBio }) =>
  <div className='logo'>
    <a href=''><h1 className='logo__title'>{title.toLowerCase()}</h1></a>
    <h4 style={{ textAlign: 'center' }}>{subtitle}</h4>
    <p className='logo__subtitle'>{shortBio}</p>
  </div>

const Social = ({ data }) =>
  <ul className='social'>
    {data && data.map((item, i) =>
      <li key={i} className='social__item' >
        <a target='_tab' href={item.url}>
          <FontAwesome name={item.icon} />
        </a>
      </li>
    )}
  </ul>

const Navigation = ({ data }) =>
  <nav className='navigation'>
    <UList data={data} />
  </nav>

const UList = ({ data }) =>
  <ul className="ulist">
    {data && data.map((item, i) =>
      <li className="ulist__item">
        {item}
      </li>
    )}
  </ul>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        subtitle
        shortBio
        social {
          icon
          url
        }
      }
    }
  }
`
