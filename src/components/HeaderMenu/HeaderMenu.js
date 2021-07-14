import React, {useState} from "react";
import Menu from '../Menu/menu';
import NavBar from '../NavBar/NavBar';

const HeaderMenu = ({bgActive}) => {

  const [isOpen, setOpen] = useState(false);

  const handleChangeMenu = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <>
    <NavBar onClickMenu={handleChangeMenu} isOpen={isOpen} bgActive={bgActive} />
    <Menu onClickMenu={handleChangeMenu} isOpen={isOpen}/>
    </>
  )
}

export default HeaderMenu;

