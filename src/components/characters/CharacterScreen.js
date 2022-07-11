import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GetCharacterbyId } from '../../utils/GetCharacterbyId';

export const CharacterScreen = () => {
    
  const Navigate =useNavigate();
  const parameter =useParams();
  
  const handleReturn =()=>{
    return Navigate(-1)
  };
  const GetCharacter=GetCharacterbyId(parameter.char_id)
  console.log(GetCharacter)
  return (
    <div className='container' style={{width: "70%" ,padding:'10px 0px'}}>
      <div className="card text-center animate__animated animate__flipInX"  style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)    "}}>
        <div className='row no-gutters' >
            <div className='col-5'>
              <img className='card-img rounded-0' src={GetCharacter.img} alt={GetCharacter.nickname} ></img>
            </div>
            <div className='col-7 '>
              <h3>{}</h3>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'><b>Name: </b>{GetCharacter.name}</li>
                <li className='list-group-item'><b>birthday: </b>{GetCharacter.birthday}</li>
                <li className='list-group-item'><b>nickname: </b>{GetCharacter.nickname}</li>
                <li className='list-group-item'><b>occupation: </b>{GetCharacter.occupation}</li>
                <li className='list-group-item'><b>status: </b>{GetCharacter.status}</li>
                <li className='list-group-item'><b>appearance: </b>{GetCharacter.appearance}</li>
                <li className='list-group-item'><b>portrayed: </b>{GetCharacter.portrayed}</li>

                <li className='list-group-item'><b>category: </b>{GetCharacter.category}</li>
                <li className='list-group-item'><b>better_call_saul_appearance: </b>{GetCharacter.better_call_saul_appearance}</li>
              </ul>
              <div className='container row mt-5 '>
                <button className='btn btn-primary' onClick={handleReturn}>
                  Regresar {}
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
