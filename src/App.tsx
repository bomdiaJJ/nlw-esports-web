// JSX: JavaScript + XML (HTML)

// Componentes
// Propriedades

// <img src="">
// img é o componente
// src="" é a propriedade

import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './components/GameBanner';

import './styles/main.css';

import logoImage from './assets/logo-nlw-svg.svg';
import { CreateAdBanner } from './components/CreateAdBanner';
import { Input } from './components/Form/Input';
import { CreateAdModal } from './components/CreateAdModal';

interface Game {
	id: string,
	title: string,
	bannerUrl: string
	_count: {
		ads: number
	}
}

function App() {
	const [games, setGames] = useState<Game[]>([])

	useEffect(() => {
		fetch('http://localhost:3333/games')
		.then(response => response.json())
		.then(data => {
			setGames(data)
		})
	}, [])

	return (
		<div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
			<img src={logoImage}/>

			<h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient text-transparent bg-clip-text '>duo</span> está aqui!</h1>

			<div className='grid grid-cols-6 gap-6 mt-16'>

			{games.map(game => {
				return (
					<GameBanner
						key={game.id}
						bannerUrl={game.bannerUrl}
						gameName={game.title}
						adAmount={game._count.ads}
					/>
				)
			})}

			</div>

			<Dialog.Root>
				<CreateAdBanner/>

				<CreateAdModal/>	 
				
			</Dialog.Root>


		</div>
	)
}

export default App