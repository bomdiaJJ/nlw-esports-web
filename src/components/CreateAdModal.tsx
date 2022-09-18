import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { Check, GameController } from 'phosphor-react';
import { Input } from "./Form/Input";
import { useEffect, useState } from 'react';

interface Game {
	id: string,
	title: string
}

export function CreateAdModal() {
	const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])

	useEffect(() => {
		fetch('http://localhost:3333/games')
		.then(response => response.json())
		.then(data => {
			setGames(data)
		})
	}, [])

    return(
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-xl'>
                <Dialog.Title className='text-3xl font-black'> Publique um anúncio </Dialog.Title>

                <form className='mt-8 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='game' className='font-semibold'>Qual o jogo?</label>
                        <select
                            id='game'
                            className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none'
                            defaultValue=""
                        >
                            <option disabled value="">Selecione o jogo</option>

                            {games.map( game => {
                                return (
                                    <option key={game.id} value={game.id}> {game.title} </option>
                                )
                            })}

                        </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='name'>Como você quer ser chamado?</label>
                        <Input id='name' type='text' placeholder='Como te chamam dentro do jogo?' />
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='yearsPlaying'>Joga a quantos anos?</label>
                            <Input id='name' type='number' placeholder='Tudo bem ser 0!' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='discord'>Qual seu discord?</label>
                            <Input id='discord' type='text' placeholder='Usuário#0000' />
                        </div>
                    </div>

                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='weekDays'>Quando costuma jogar?</label>
                            <ToggleGroup.Root
                                type='multiple'
                                className='grid grid-cols-4 gap-2'
                                value={weekDays}
                                onValueChange={setWeekDays}
                            >
                                <ToggleGroup.Item
                                    value='0'
                                    className={`w-8 h-8 rounded  ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Domingo"
                                >
                                    D
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`w-8 h-8 rounded  ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Segunda"
                                    value='1'
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`w-8 h-8 rounded  ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Terça"
                                    value='2'
                                >
                                    T
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`w-8 h-8 rounded  ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Quarta"
                                    value='3'
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`w-8 h-8 rounded  ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Quinta"
                                    value='4'
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`w-8 h-8 rounded  ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Sexta"
                                    value='5'
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`w-8 h-8 rounded  ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Sábados"
                                    value='6'
                                >
                                    S
                                </ToggleGroup.Item>
                            </ToggleGroup.Root>
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <label htmlFor='hourStart'>Qual horário do dia?</label>
                            <div className='grid grid-cols-2 gap-2'>
                                <Input id='hourEnd' type='time' placeholder='De' />
                                <Input id='hourEnd' type='time' placeholder='Até' />
                            </div>
                        </div>
                    </div>

                    <label className='mt-2 flex items-center gap-2 text-sm '>
                        <Checkbox.Root className='w-6 h-6 p-1 rounded bg-zinc-900'>
                            <Checkbox.Indicator>
                                <Check className='w-4 h-4 text-emerald-400'/>
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar ao chat de voz
                    </label>

                    <footer className='mt-4 flex justify-end gap-4'>
                        <Dialog.Close
                            type="button"
                            className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
                        >
                            Cancelar
                        </Dialog.Close>
                        <button
                            type='submit'
                            className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                        >
                            <GameController size={24}/>
                            Encontrar Duo
                        </button>
                    </footer>

                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}