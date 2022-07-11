
import { bb_and_bcs } from '../data/Dcharacters'

export const FilterCharacter = (Category) => {
  return (
        bb_and_bcs.filter((character)=>(character.category).includes(Category)===true)
  )
}
