import { Container, Logout, Menu, Brand } from "./styles";

import { MdClose } from "react-icons/md";
import { FiMenu, FiLogOut } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import brand from "../../assets/logo.svg";
import brandAdmin from "../../assets/admin-desktop.svg";
import brandMobile from "../../assets/admin-mobile.svg";

import { useAuth } from "../../hooks/auth";
import { Button } from "../Button";
import { Input } from "../Input";

export function Header({
  isAdmin,
  isdisabled,
  isMenuOpen,
  setIsMenuOpen,
  setSearch,
}) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const logo = isAdmin ? (isDesktop ? brandAdmin : brandMobile) : brand;

  const { signOut } = useAuth();
  const navigate = useNavigate();

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
          {!isMenuOpen ? (
            <FiMenu
              className="fi-menu-icon"
              onClick={() => setIsMenuOpen(true)}
            />
          ) : (
            <>
              <MdClose size={"1.8rem"} onClick={() => setIsMenuOpen(false)} />
              <span>Menu</span>
            </>
          )}
        </Menu>
      )}

      {(isDesktop || !isMenuOpen) && (
        <>
          <Brand>
            <img src={logo} alt="Logo" />
          </Brand>

          {isDesktop && (
            <Input
            placeholder="&#x1F50E;&#xFE0E; Busque por pratos ou ingredientes"
            disabled={isdisabled}
            onChange={(e) => setSearch(e.target.value)}
            />
          )}

          {isAdmin ? (
            isDesktop && (
              <Button className="new" title="Novo prato" onClick={handleNew} />
            )
          ) : (
            <Button
              className="orders"
              title={isDesktop ? "Pedidos" : undefined}
              isCustomer
              orderCount={0}
            />
          )}

          {isDesktop && (
            <Logout onClick={handleSignOut}>
              <FiLogOut size={"3.2rem"} />
            </Logout>
          )}
        </>
      )}
    </Container>
  );
}
