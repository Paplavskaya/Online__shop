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
import { Cart } from '../modules/cart'
import { Checkout } from '../modules/checkout'
import { News } from '../modules/news'
import { WishList } from '../modules/wishlist'
import { Authentication } from '../modules/authentication'

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
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/checkout/*" element={<Checkout/>}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/wishlist" element={<WishList/>}/>
                    <Route path="/login" element={<Authentication/>}/>
                    <Route path="/registration" element={<Authentication/>}/>
                </Route>
            </Routes>
    </>
}