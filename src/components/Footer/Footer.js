import React from "react";
import {Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   .navbar{
   background-color:#222;
   }
   .navbar p{
    color: white;
    text-alight: center;  
   }
`;
export const Footer = () =>(
    <Styles>
        <Navbar fixed="bottom">
            <p>
                © 2019 gogopizza.by.
                УНП 591003127 ООО «ВелМаксЮнион»
                Заказать: +375 (29) 555-1-666
                info@gogopizza.by
            </p>
        </Navbar>
    </Styles>
);