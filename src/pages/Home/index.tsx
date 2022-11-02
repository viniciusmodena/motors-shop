import { AdvertiseList } from "../../components/AdvertiseList"
import { Header } from "../../components/Header"
import { getProduct, getProducts } from "../../data"

export default function Home(){
    const products = getProducts()
    return (
        <>  
            <AdvertiseList products={products} type="auction"/>
            <AdvertiseList products={products} type="car"/>
            <AdvertiseList products={products} type="bike"/>
        </>
    )
}