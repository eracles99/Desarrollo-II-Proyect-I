import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BetterCallSaulScreen } from '../components/better-call -saul/BetterCallSaulScreen'
import { BreakingBadScreen } from '../components/breaking-bad/BreakingBadScreen'
import { CharacterScreen } from '../components/characters/CharacterScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Nav } from '../layouts/Nav'

export const RouterDashboard = () => {
  return (
    <div>
      <Nav/>
      <Routes>
          <Route path='/' element={<BreakingBadScreen/>}></Route>
          <Route path='/Breaking-Bad-Screen' element={<BreakingBadScreen/>}></Route>
          <Route path='/Better-Call-SaulS-creen' element={<BetterCallSaulScreen/>}></Route>
          <Route path='/Character-Screen/:char_id' element={<CharacterScreen/>}></Route>
          <Route path='/Search-Screen' element={<SearchScreen/>}></Route>
      </Routes>
    </div>
  )
}
