import { useState, useEffect } from 'react'
import './repositorios.styles.css'

const Repositorios = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const getReposData = async () => {
      const response = await fetch(
        'https://api.github.com/users/valentinahastenreiter/repos'
      )
      const data = await response.json()
      setRepos(data)
    }

    getReposData()
  }, [])

  useEffect(() => {})

  return (
    <section className="repositorios">
      {repos.map(repo => (
        <div key={repo.id} className="repo">
          <h3 className="repoName">{repo.name}</h3>
          <p className="repoDescription">{repo.description}</p>
          <div className="repoLanguage">{repo.language}</div>
        </div>
      ))}
    </section>
  )
}

export default Repositorios
