import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  // mesmo que não faça muito sentido o estado abaixo aqui nesse lugar, 
  // não acho necessário, em uma situação simples como essa, utilizar Context API
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
      />

      <Content
        selectedGenreId={selectedGenreId}
      />

    </div>
  )
}