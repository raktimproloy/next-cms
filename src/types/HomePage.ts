

export interface BlogType{
    id: number,
    image: String,
    date: String,
    title: String,
    viewAll: String,
    animationDuration: String
}


export interface ChooseUsType{
    title: String,
    description: String
}

export interface CounterType{
    id: number,
    title: String,
    count: number,
    symbol: String
}


export interface ServiceType{
    id: number,
    icon: String,
    title: String,
    description: String,
    seeDetails: String,
    animationDuration: number
}


export interface TestimonialType {

    id: number,
    rating: number,
    review: String,
    name: String,
    position: String,
    image: String
}