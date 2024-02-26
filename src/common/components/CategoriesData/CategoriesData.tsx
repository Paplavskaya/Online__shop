import { useEffect } from "react";
import store from "../../stores/CatalogListStore";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";

export const CategoriesData = observer(() => {
    const {categoriesDataState, loadingProducts, loadingCategories} = store

    useEffect(()=>{
        loadingCategories()
    },[])

    const hendleCategoryClick = (categoryId: string) => {
        loadingProducts(categoryId)
    }

    return (categoriesDataState && categoriesDataState.length >0 && categoriesDataState.map((category)=>{
        return <NavLink key={category.id} className='menu__item' to={`/${category.id}`} onClick={()=>{hendleCategoryClick(category.id)}}>{category.name}</NavLink>
    }))
})