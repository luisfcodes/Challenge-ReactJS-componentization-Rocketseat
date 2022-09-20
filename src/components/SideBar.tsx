import { memo, useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from '../components/Button';

import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  selectedGenreId: number,
  handleClickButton: (genre: number) => void
}

function SideBarComponent({ selectedGenreId, handleClickButton }: SideBarProps) {

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);


  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}

export const SideBar = memo(SideBarComponent)