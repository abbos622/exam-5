import {Routes, Route} from "react-router-dom";

import Home from "./home/Home";
import SinglePage from "./single-page/SinglePage";


const RouteController = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:id" element={<SinglePage/>}/>
        </Routes>
    )
}

export default RouteController