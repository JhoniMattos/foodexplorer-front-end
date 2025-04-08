import { Container, Logout, Menu, Brand } from "./styles";

import { MdClose } from "react-icons/md";
import { FiMenu, FiLogOut } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

import brand  from '../../assets/logo.svg'
import brandAdmin from '../../assets/admin-desktop.svg'
import brandMobile from '../../assets/admin-mobile.svg'

import { Button } from "../Button";
import { Input } from "../Input";

export function Header({ isAdmin, isdisabled, isMenuOpen, setIsMenuOpen, setsearch }) {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const logo = isAdmin ? (isDesktop ? brandAdmin : brandMobile) : brand;

  
    function handleFavorites() {
      navigate("/favorites");
    }
  
    function handleNew() {
      navigate("/new");
    }
  
    function handleSignOut() {
      navigate("/");
      signOut();
    }

  return (
    <Container>
      {!isDesktop && (
        <Menu>
          {!isMenuOpen ?
            <FiMenu className="fi-menu-icon" onClick={() => setIsMenuOpen(true)} /> :
            <>
              <MdClose size={"1.8rem"} onClick={() => setIsMenuOpen(false)} />
              <span>Menu</span>
            </>
          }
        </Menu>
      )}

      {(isDesktop || !isMenuOpen) && (
        <>
          <Brand>
            <img src={logo} alt="Logo" />
          </Brand>

          {isDesktop && <Input isdisabled={isdisabled} setsearch={setsearch} />}

          {isDesktop &&
            <button className="favorites" onClick={handleFavorites}>Meus favoritos</button>
          }

          {isAdmin ? 
            (isDesktop && <Button className="new" title="Novo prato" onClick={handleNew} />) :
            <Button className="orders" title={isDesktop ? "Pedidos" : undefined} isCustomer orderCount={0} />
          }

          {isDesktop &&
            <Logout onClick={handleSignOut}>
              <FiLogOut size={"3.2rem"} />
            </Logout>
          }
        </>
      )}
    </Container>
  );
}
