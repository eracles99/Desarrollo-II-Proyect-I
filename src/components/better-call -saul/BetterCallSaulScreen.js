import React from 'react'
import { CategoryScreen } from '../../utils/CategoryScreen'
import { CharacterList } from '../characters/CharacterList'
export const BetterCallSaulScreen = () => {
  return (
    <div>
       <CategoryScreen Category="Better Call Saul"/>
      <div style= {{backgroundColor: "#3B3B3B"}} >
        <div className="container" style= {{backgroundColor: "#3B3B3B"}} >
          <CharacterList Category="Better Call Saul"/>
        </div>
      </div>
    </div>
      
  )
}
