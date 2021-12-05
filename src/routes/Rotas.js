import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'
import Home from '../pages/Home'
import ListPage from '../pages/ListPage'
import Projects from '../pages/Projects/Projects'

function Rotas() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/lista" component={ListPage} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Rotas
