import React from 'react'
import { CategoryScreen } from '../../utils/CategoryScreen';
import { CharacterList } from '../characters/CharacterList';
export const BreakingBadScreen = () => {
  return (
    <>
      <CategoryScreen Category="The Breaking Bad"/>
      <div style= {{backgroundColor: "#3B3B3B"}} >
        <div className="container" style= {{backgroundColor: "#3B3B3B"}} >
          <CharacterList Category="Breaking Bad"/>
        </div>
      </div>
    </>
  )
}
