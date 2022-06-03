import styled from 'styled-components';
import {devices} from '../Media queries'
import { colors } from "../Colors";
import { fontSize } from '../FontSize';
import { type } from 'os';
export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 100px 1rem 100px;
  border: rgba(0, 0, 0, 0.5); 
  @media ${devices.md}{

padding-left:1.5rem;
padding-right: 1.5rem;
  }
`

export const Logo = styled.a`
color: ${colors.black};
font-size: ${fontSize.xl};
text-transform: uppercase;
letter-spacing: 1rem;
`
type Props = {
 menuToggle:boolean;
}
export const MenuToggle = styled.div<Props>`
width: 25px;
height: 25px;
background-size: 25px;
background-repeat: no-repeat;
transition: all;
background-image: ${(props)=> props.menuToggle ?'url(/close.png)' : 'url(/menu.png)'};
`


