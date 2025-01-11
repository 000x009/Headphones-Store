import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from "../../pages/IndexPage/IndexPage.jsx";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="*" element={<IndexPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}