import React, { useState } from 'react'
import { getItem, setItem } from '../../services/LocalStorageFuncs'
import styled from 'styled-components'

const LoginArea = styled.div`

`;

function Login(props) {
    const user = getItem('usuario') 

  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [passIncorrect, setPassIncorret] = useState(false) 

  const cond = (name.length > 3 && pass.length > 5)

    const saveUser = (name,pass) => {
        const { history: { push} } = props;
        if(user){
          
          if(user.name.length > 0 && user.pass.length > 0){
            if(name === user.name && pass === user.pass){
              push('/store')
            }else if( name === user.name && pass !== user.pass) {
              setPassIncorret(true);
            }else {
              setItem('usuario',{name,pass})
              push('/store')
            }
        }
        }else {
          console.log('oi')
          setItem('usuario',{name,pass})
          push('/store')
        }
      }

    return (
        <LoginArea>
        <span>
          {/* <CgProfile /> */}
        </span>
        <input
          type="text"
          onChange={({target:{value}}) => setName(value)}
          value={name}
          placeholder="Name"
        />
  
        <input
          type="password"
          onChange={({target:{value}}) => setPass(value)}
          value={pass}
          placeholder="Password"
        />
  
        {
          passIncorrect && <p>Passowrd Incorrect</p>
        }
  
  
        <button
          type="button"
          onClick={ () => saveUser(name,pass)}
          disabled={ !cond }
        >
          Sing In
        </button>
      </LoginArea>
    );
  }
  
export default Login;

//https://www.phind.com/agent?cache=clojkboxx000dl8082rdn6gh3