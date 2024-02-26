import './Categories.css'

export const Categories = () => {
    return <div className="categories">
                <a className="categories__item item__hranenie" href="/hranenie">
                    <h2 className="categories__item__title">Хранение</h2>
                </a>
                <a className="categories__item item__vannaya" href="/vannaya">
                    <h2 className="categories__item__title">Товары для ванной</h2>
                </a>
                <a className="categories__item item__interior" href="/interior">
                    <h2 className="categories__item__title">Оформление интерьера</h2>
                </a>
                <a className="categories__item item__detyam" href="/detyam">
                    <h2 className="categories__item__title">Детский ассортимент</h2>
                </a>
                <a className="categories__item item__posuda" href="/posuda">
                    <h2 className="categories__item__title">Посуда</h2>
                </a>
                <a className="categories__item item__tekstil" href="/tekstil">                    
                    <h2 className="categories__item__title">Текстиль</h2>
                </a>
            </div>
}