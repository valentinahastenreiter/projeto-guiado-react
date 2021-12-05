import Profile from '../../components/Profile/Profile'
import Repositorios from '../../components/Repositorios/Repositorios'
import './projects.styles.css'

function Projects() {
  return (
    <div className="projects">
      <div className="projectProfile">
        <Profile />
      </div>

      <div className="projectRepos">
        <h3>Meus Repositórios</h3>
        <Repositorios />
      </div>
    </div>
  )
}

export default Projects
