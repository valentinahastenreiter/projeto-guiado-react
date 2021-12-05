import { Link } from 'react-router-dom'
import './menu.styles.css'

const Menu = () => {
  return(
    <ul className='menu'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/lista'>Projeto To Do List</Link>
      </li>
      <li>
        <Link to='/projects'>Outros Projetos</Link>
      </li>
    </ul>
  )
}

export default Menu

