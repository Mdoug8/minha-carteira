import React from "react";

import SelectInput from "../../components/SelectInput";
import ContentHeader from "../../components/ContentHeader";

import {Container} from './styles';

const Dashboard: React.FC = () =>{

    const options = [
        {value:'Matheus', label:'Matheus'},
        {value: 'Douglas', label: 'Douglas'}, 
    ]

    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );

}

export default Dashboard;