import { NextPage } from 'next';
import React from 'react'

import { HeaderDiv, Logo, MenuToggle } from './Header.styles'

interface Props {
  menuToggle:boolean;
  menuClicked():void;
}

const Header= ({ menuToggle ,menuClicked}:Props) => {
  return (
    <HeaderDiv>
      <Logo>My Blog</Logo>
      <MenuToggle onClick={menuClicked} menuToggle={menuToggle} />
    </HeaderDiv>
  )
}


export default Header