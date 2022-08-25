import React, {useMemo, useEffect, useState} from "react";

import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import ContentHeader from "../../components/ContentHeader";

import { Container, Content, Filters } from "./styles";
import { useParams } from "react-router-dom";




type IRouteParams = {
    match: {
        params:{
            type:string;
        }
    }
}

const List:React.FC = () => {

    let params = useParams();

    //desestruturacao
    // const [title, setTitle] = useState<{title:string,lineColor:string}>({
    //     title:'',
    //     lineColor:''
    // });

    
    // useEffect(()=>{

    //     const type  = params.type;

    //     if(type==='entry-balance'){
    //         setTitle({title:'Entrada',lineColor:'#F7931B'}) 
    //     }
    //     else{
    //         setTitle({title:'Saídas',lineColor:'#E44C4E'}) 
    //     }

    // },[params]);

    const {type} = params;
    
    const title = useMemo(() => {
        return type === 'entry-balance' ? {
            title:'Entradas',
            lineColor:'#F7931B'
        } : {
            title:'Saídas',
            lineColor:'#E44C4E'
        }
    }, [type])
   
    

    const months = [
        {value: 8, label: 'Agosto'}, 
        {value: 9, label: 'Setembro'}, 
        {value:7, label:'Julho'},
    ]

    const years = [
        {value:2022, label: 2022},
        {value:2021, label: 2021}, 
        {value:2020, label: 2020}, 
    ]


    return(
        <Container>
            <ContentHeader title={title.title } lineColor={title.lineColor}>
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button 
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>

                <button 
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>
                
            <Content>
            <HistoryFinanceCard 
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
            </Content>
        </Container>
    )
};

export default List;