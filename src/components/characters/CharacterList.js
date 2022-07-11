import React from 'react'
import { FilterCharacter } from '../../utils/FilterCharacter'
import { CharacterCard } from './CharacterCard'

export const CharacterList = (props) => {
  const characters=FilterCharacter(props.Category)
  return (
    <div className='row row-cols-3 row-cols-md-4 g-5 mt-5  animate__animated animate__fadeIn'>
      {characters.map((character)=><CharacterCard 
                                    key={character.char_id} 
                                    name={character.name}
                                    birthday={character.birthday}
                                    occupation={character.occupation}
                                    img={character.img}
                                    nickname={character.nickname}
                                    char_id={character.char_id}/>)}
    </div>
  )
}
