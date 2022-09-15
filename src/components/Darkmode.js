import React, {useState} from 'react';

const [myStyle, setMyStyle] = useState({
    color:'white',
    backgroundColor:'black'
  });

  const toggleStyle = ()=>
  {
    if(myStyle.color == 'white'){
      setMyStyle({
        color:'black',
        backgroundColor: 'white'
      });
    }
    else
    {
      setMyStyle({
        color:'white',
        backgroundColor: 'black'
      })
    }
  }