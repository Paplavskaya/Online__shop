export type CatalogData = {
    result: string,
    blocks: [],
    meta: {
        page: number,
        last_page: number,
        per_page: number,
        total: number,
    },
    data: Product[]
}

export type Product = {
    order: number,
    name: string,
    external_id: number,
    uuid: string,
    features: [],
    images_info: {
        alt: string,
        title: string
    },
    brand: string,
    brand_id: number,
    sex: string,
    categories: string[],
    model: {
        id: number,
        slug: string
    },
    price: number,
    old_price: number,
    price_diff_percent: number,
    media: [
        {
            x2: string,
            webp_x2: string
        }
    ],
    google_snippet: [],
    dependencies: []
}