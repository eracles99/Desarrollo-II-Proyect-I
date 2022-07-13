import React from 'react'
import { Link} from 'react-router-dom'
import'./CharacterCard.css'
import './js.js'
export const CharacterCard = (props) => {
  return (
    <>
        <div className='animate__animated animate__bounce'>
            <div className='character-card' >
                <div className='img-container-card'>
                    <div className='img-container'>
                        <img className="img-card" src={props.img} alt={props.name}/>
                        
                    </div>
                    <div className='img-container-card-lateral'>
                        <div className='triangle'></div>
                    </div>
                        <Link style={{color: 'white',fontSize:"15px" }}  to={`/Character-Screen/${props.char_id}`} className='content-button-card' >ver</Link>

                </div>
                <div className='conatiner-card'>
                    <div style={{padding:"20px 0px 5px" , fontWeight:"700",fontSize:"14px"}} className="text-center">
                        <div>{props.name}</div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/31NhsG8XFpL._SX425_.jpg" alt='None' style={{width:"40px"}}/>
                            {props.birthday}
                    </div>
                    <div style={{textAlign: 'center' ,fontSize: '13px' ,margin: '2px 10px'}}>
                        {props.occupation}
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </>
  )
}

