import css from 'styled-jsx/css'

export default css.global`
body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 3.5rem 0 0;
}
li {list-style: none; display: inline-block;}
#main {
  position: relative;
  display: flex;
}
.welcome {
  font-size: 2.5rem;
  text-align: center;
  height: 400px;
  width: 100%;
  vertical-align: middle;
  align-items: center;
  display: flex;
  justify-content: center;
}
.sidebar {
  width: 200px;
  // z-index: 100;
  // position: absolute;
  // top: 0;
  background-color: #ccc;
  height: 100%;
}
.sidebar li {
  list-style: none;
}
.main-content{
  padding-left: 20px;
  width: 100%;
}
.sidebar li a {
  text-decoration: none;
}
`