
import { bb_and_bcs } from '../data/Dcharacters'

export const GetCharacterbyId = (id="") => {
  //console.log('GetCharacterId',id)
  return (
    bb_and_bcs.find((character)=>character.char_id === parseInt(id))
  )
}
