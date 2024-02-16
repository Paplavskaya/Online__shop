import { Route, Routes } from "react-router-dom"
import { CatalogList } from "./CatalogList"

export const Catalog = () => {
    return <Routes>
        <Route index element={<CatalogList />}/>
    </Routes>
}