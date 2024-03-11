import { Route, Routes } from "react-router-dom"
import { NewsList } from "./components/NewsList"
import { NewsPage } from "./components/NewsPage"

export const News = () => {
    return <Routes>
                <Route index element={<NewsList />}/>
                <Route path="/:newsId" element={<NewsPage />} />
            </Routes>
}