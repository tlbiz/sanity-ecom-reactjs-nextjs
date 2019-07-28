import css from 'styled-jsx/css'

export default css`

footer {
  padding: 1rem 1rem;
  text-align: center;
  font-size: 1rem;
  position: fixed;
  bottom: 0px;
  width: 100%;
}

footer img {
  display: inline-block;
  height: 1em;
  width: auto;
  padding: 0 0.4em;
}

nav {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  font-size: 1rem;
  height: 3.5rem;
  z-index: 100;
}

nav a {
  flex-grow: 1;
  color: #fff;
  text-decoration: none;
  text-align: center;
}
`
