interface GenreResponseProps {
  title: string;
}

export function Header({title}: GenreResponseProps){
  return (
      <header>
          <span className="category">Categoria:<span> {title}</span></span>
      </header>
  )
}