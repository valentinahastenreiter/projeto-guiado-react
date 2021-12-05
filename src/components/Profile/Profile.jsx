import { useState, useEffect } from 'react'
import './profile.styles.css'

function Profile() {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(
        'https://api.github.com/users/valentinahastenreiter'
      )
      const data = await response.json()
      setProfile(data)
    }

    getProfile()
  }, [])
  console.log(profile)

  return (
    <section className="profile">
      <img src={profile.avatar_url} alt={profile.name} />
      <div className="profileInfo">
        <h2 className="nameProfile">{profile.name}</h2>
        <p className="nameDescription">
          Olá me chamo Valentina, sou técnica em edificações e graduanda em
          Engenharia Civil. Sempre fui apaixonada por tecnologia e apesar da
          vida me levado para outra área, aqui estou novamente, disposta a
          aprender e evoluir sempre. Sou aluna da Reprograma no curso de
          Desenvolvedora Front-end e cada dia mais estou me apaixonando pela
          área. Quer acompanhar minha jornada de transição de carreira? Me sigam
          nas redes sociais.❤
        </p>
      </div>
    </section>
  )
}

export default Profile
