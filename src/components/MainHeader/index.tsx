import React, {useMemo} from "react";

import Toggle from "../Toggle";
import emojis from "../../utils/emojis";

import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () =>{

    const emoji = useMemo(() => {
        //math.random pega um valor aleatorio que varia de acordo com o tamanho de emojis eo math.floor arendoda esse valor
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    },[])
    return(
        <Container>
            <Toggle/>

            <Profile>
                <Welcome>Olá, {emoji} </Welcome>
                <UserName>Matheus Araujo</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;