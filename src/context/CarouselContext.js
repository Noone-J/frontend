import { createContext, useState, useCallback } from "react"

const CarouselContext = createContext()

export default CarouselContext;

export const CarouselProvider = ({children}) => {
    let [leCarousel, setleCarousel] = useState([]);

    let callCarousel = useCallback(async () => {
        console.log("tchek 1")
        const response = await fetch('/battle/api/carousel-splash-url',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },
    
        });
        let data = await response.json();

        if(data){
            console.log("tchek 2")
            localStorage.setItem('leCarousel', JSON.stringify(data));
            setleCarousel(data)
            console.log(data)
        } else {
            console.log("tchek 3")
            alert("une erreur c'est produit lors de la connection àl'api")
        }
    }, []);   
    let contextData = {
        leCarousel: leCarousel,
        setleCarousel: setleCarousel,
        callCarousel: callCarousel,
    }

    return(
        <CarouselContext.Provider value={contextData}>
            {children}
        </CarouselContext.Provider>
    )
}