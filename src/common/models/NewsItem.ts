export type NewsItem = {            
    id: number,
    date: string,
    title: string,
    img: string,
    description: string,
    parts: [
        {
            partId: string,
            partTitle: string,
            partInfo: string,
            partImg: string
        }
    ]
}