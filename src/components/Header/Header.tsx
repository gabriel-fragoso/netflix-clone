import Image from 'next/image'
import Logo from '../../assets/netflix-logo.png'
import Avatar from '../../assets/avatar.png'
import { MagnifyingGlass, Bell, CaretDown } from 'phosphor-react'
import { useState } from 'react'
import axios from 'axios'
import { apiKey } from '../../services/api'

export default function Header() {

  const [input, setInput] = useState("");

  function submit(e: any) {
    e.preventDefault()

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&page=1&include_adult=false`).then((resp) => {
      console.log(resp.data)
    })

  }

  return (
    <header>
      <div className="logo">
        <Image
          src={Logo}
          width={150}
          height={40}
        />
      </div>
      <a href="#">Início</a>
      <a href="#">Séries</a>
      <a href="#">Filmes</a>
      <a href="#">Bombando</a>
      <a href="#">Minha lista</a>
      <div className="avatar-area">
        <form onSubmit={(e) => submit(e)}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Títulos, gente e gêneros'
            type="movie" />
        </form>
        <div className="lupa">
          <MagnifyingGlass
            weight="bold"
            className='lupa'
            color='white'
            size={42} />
        </div>
        <a className='kid' href="#">Infantil</a>
        <div className="bell">
          <button>9+</button>
          <Bell
            color='white'
            size={38}
            weight='fill'
          />
        </div>
        <div className="avatar-area">
          <Image
            width={48}
            height={48}
            className='avatar'
            src={Avatar}
          />
        </div>
        <CaretDown
          color='white'
          size={18}
          weight="fill" />
      </div>
    </header >
  )
}