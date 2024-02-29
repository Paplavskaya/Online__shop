import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from '../modules/main'
import { Layout } from './Layout'
import { AboutUs } from '../modules/about_us'
import { Vozvrat } from '../modules/vozvrat'
import { Dostavka } from '../modules/dostavka'
import { Oplata } from '../modules/oplata'
import { CatalogPage } from '../modules/CatalogPage'
import { CatalogList } from '../modules/CatalogList'

export const App = () => {
    return <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />}/>
                    <Route path="/about_us" element={<AboutUs/>}/>
                    <Route path="/dostavka" element={<Dostavka/>}/>
                    <Route path="/vozvrat" element={<Vozvrat/>}/>
                    <Route path="/oplata" element={<Oplata/>}/>
                    <Route path="/:catalogId/*" element={<CatalogList/>}/>
                    <Route path="/:catalogId/:productId" element={<CatalogPage />} />
                </Route>
            </Routes>
    </>
}