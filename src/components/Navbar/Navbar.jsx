import {Link} from 'react-router-dom'
import * as S from "./styledNavbar"

const Navbar = () => {
    return (
        <S.NavbarContainer>
          <h1>K NEWS</h1>
          <S.NavbarLinkContainer>
          <S.NavbarLink>
          <Link to='/'>
                Homepage 
              </Link>
          </S.NavbarLink>
          </S.NavbarLinkContainer>
           <S.NavbarLinkContainer>
            <S.NavbarLink>
            <Link to='/Topics'>
                Topics 
              </Link>
            </S.NavbarLink>
           </S.NavbarLinkContainer>
  <S.NavbarLinkContainer>
    <S.NavbarLink>
    <Link to='/Articles'>
                Articles 
              </Link>
    </S.NavbarLink>
  </S.NavbarLinkContainer>
        </S.NavbarContainer>
      );
    };


export default Navbar