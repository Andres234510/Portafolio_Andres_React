import React from 'react'
import { Card } from '../../Layout/Card/Card'
import { Wrapper } from '../../Layout/Wrapper/Wrapper'
import css from '../Profile/icon/css.png'
import figma from '../Profile/icon/figma.png'
import html from '../Profile/icon/html.png'
import java from '../Profile/icon/java.png'
import JavaScript from '../Profile/icon/JavaScript.png'
import mongp from '../Profile/icon/mongp.png'
import node from '../Profile/icon/node.png'
import react from '../Profile/icon/react.png'
import python from '../Profile/icon/python.png'

export const Profile = () => {
  return (
    <div className='Profile'>
      <h2>Profile</h2>
      <div className='cards'>
        <Card imge={python}/>
        <Card imge={css} text='CSS' porcent='55%' estilos='progress-bar-c'/>
        <Card imge={figma} text='Figma' porcent='50%' estilos='progress-bar-f'/>
        <Card imge={html} text='HTML' porcent='80%' estilos='progress-bar-h'/>
        <Card imge={java} text='JAVA' porcent='96%' estilos='progress-bar-j'/>
        <Card imge={JavaScript} text='JavaScript' porcent='90%' estilos='progress-bar-s'/>
        <Card imge={mongp} text='Mongo' porcent='30%' estilos='progress-bar-m'/>
        <Card imge={node} text='Node' porcent='25%' estilos='progress-bar-n'/>
        <Card imge={react} text='React' porcent='45%' estilos='progress-bar-r'/>
      </div>
      
      <Wrapper />

    </div>
  )
}
