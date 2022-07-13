
import React, { useMemo } from "react";
import  useForm  from "../../hooks/useForm";
import { useNavigate, useLocation } from 'react-router-dom';
import { getCharacterByName } from "../../selector/getCharacterByName";
import queryString from 'query-string';
import { CharacterCard } from "../characters/CharacterCard";
export const SearchScreen = () => {
  const navigate= useNavigate();
    const location= useLocation();

    const {q = ''} = queryString.parse(location.search);
    const [value,handleInputChange]=useForm({
        searchText:q,
    });
    const {searchText}=value;

    const CharacterFiltered=useMemo(()=>getCharacterByName(q),[q]);
    
    const handleSearch=(e)=>{
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }
    return(
        <div style= {{backgroundColor: "#3B3B3B"}} >
          
            <h1 style={{position:"relative",top:10 ,right:-15,color:'white'}}>
            Busquedas
            </h1>
            
            <hr/>
            <div className='row'>
                <div className='col-5'>
                <h4 style={{position:"relative",top:10 ,right:-15 ,color:'white'}}>buscar</h4>
                <hr/>
                <form onSubmit={handleSearch}>
                <input type='text'
                placeholder='buscar Heroe...'
                className='form-control'
                name='searchText'
                autoComplete='off'
                value={searchText}
                onChange={handleInputChange}
                style={{position:"relative",top:-5 ,right:-14 }}
                />
                <button className='btn btn-success mt-2'style={{position:"relative",top:-5 ,right:-15,color:'white' }}>
                    buscar
                </button>
            </form>
                </div>
            <div className='col-7'>
                <h4 style={{color:'white'}}>Resultados</h4>
                <hr/>
                {
                    (q==='')
                    ?<div className='alert alert-info' style={{position:"relative",top:-5,width:500}}>buscar personaje</div>
                    :(CharacterFiltered.length===0) && <div className='alert alert-danger'>no hay resultados para: {q} </div>
                }

                {
                    CharacterFiltered.map(character=>(
                        <CharacterCard
                            key={character.id}
                            {...character}
                            style={{justifyContent:'space-around'}}
                        />
                    ))
                }
            </div>
            </div>
        </div>
    )
}
