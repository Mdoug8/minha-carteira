import * as React from "react";
import {Routes, Route} from 'react-router-dom';

const Layout = React.lazy(() => import("../components/Layout"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const List = React.lazy(() => import("../pages/List")); 


const AppRoutes: React.FC = () => (

    <Layout>
        <Routes>
            <Route path="/dashboard" element ={<Dashboard/>} />
            <Route path="/list/:type"  element ={<List/>} />
        </Routes>
    </Layout>
    
    
);

export default AppRoutes;