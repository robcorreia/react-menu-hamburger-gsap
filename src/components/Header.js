import React, { useState, useEffect } from "react";
import { withRouter, Link } from 'react-router-dom';
import Hamburger from './Hamburger';

const Header = ( { history}) => {

  //estado para o menu clicado ou não
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });

  //estado para mudar o botão como ativo ou desativado
  const [disabled, setDisabled] = useState(false);

  //useEffect para troca de páginas
  useEffect(() =>{
    //escutar a troca das paginas
    history.listen(() => {
      setState({clicked: false, menuName: 'Menu'})
    })
  }, []);



  //inicia em null
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        manuName: 'Close'
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu'
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close'
      });
    }
  };

  //determina se o botão de menu está disabilitado
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);

  }

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to='/'>BRAND.</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>Menu</button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
