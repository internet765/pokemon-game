import { useHistory } from "react-router-dom";

import style from './header.module.css';

const Header = ({title, desc}) => {

  const hisyory = useHistory();

  const handleClick = () => {
    hisyory.push('/game')
  }

    return (
      <header className={style.root}>
      <div className={style.forest}>
        <div className={style.silhouette}></div>
        <div className={style.moon}></div>
      </div>
          <div className={style.container}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <button onClick={handleClick}>
              Start Game!
            </button>
          </div>
      </header>
    );
  }
  
export default Header