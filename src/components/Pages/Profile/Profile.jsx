import React from 'react'
import { Card } from '../../Layout/Card/Card'

export const Profile = () => {
  return (
    <div className='Profile'>
      <h2>Profile</h2>
      <div className='cards'>
        <Card />
        <Card imge='src/assets/images/icon/css.png' text='CSS' porcent='55%' estilos='progress-bar-c'/>
        <Card imge='src/assets/images/icon/figma.png' text='Figma' porcent='50%' estilos='progress-bar-f'/>
        <Card imge='src/assets/images/icon/html.png' text='HTML' porcent='80%' estilos='progress-bar-h'/>
        <Card imge='src/assets/images/icon/java.png' text='JAVA' porcent='96%' estilos='progress-bar-j'/>
        <Card imge='src/assets/images/icon/JavaScript.png' text='JavaScript' porcent='90%' estilos='progress-bar-s'/>
        <Card imge='src/assets/images/icon/mongp.png' text='Mongo' porcent='30%' estilos='progress-bar-m'/>
        <Card imge='src/assets/images/icon/node.png' text='Node' porcent='25%' estilos='progress-bar-n'/>
        <Card imge='src/assets/images/icon/react.png' text='React' porcent='45%' estilos='progress-bar-r'/>
      </div>
      
    </div>
  )
}
