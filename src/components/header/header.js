import style from './header.module.css';

const Header = ({title, desc}) => {
    return (
      <header className={style.root}>
      <div className={style.forest}></div>
          <div className={style.container}>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
      </header>
    );
  }
  
export default Header