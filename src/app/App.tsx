import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from '../modules/main'
import { Catalog } from '../modules/catalog'
import { Brands } from '../modules/brands/Brands'
import { Layout } from './Layout'
import { Promotion } from '../modules/promotion'

export const App = () => {
    return <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />}/>
                    <Route path="/catalog/*" element={<Catalog />}/>
                    <Route path="/brands" element={<Brands />}/>
                    <Route path="/promotion" element={<Promotion />}/>
                </Route>
            </Routes>
    </>
}