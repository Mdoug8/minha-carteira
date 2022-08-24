import React from "react";

import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import ContentHeader from "../../components/ContentHeader";

import { Container, Content } from "./styles";

const List:React.FC = () => {

    const options = [
        {value:'Matheus', label:'Matheus'},
        {value: 'Douglas', label: 'Douglas'}, 
    ]


    return(
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={options}/>
            </ContentHeader>
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
            <Content>

            </Content>
        </Container>
    )
};

export default List;