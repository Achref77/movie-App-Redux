export const filterbyname = (payload) => {
    return {
        type: "CHANGER", payload
    }
}


export const changeRating = (newRating, name) => {
    return {
        type: "RATING",
        newRating, name
    }
}

export const handlechange = (payload) => {
    return {
        type: "HANDLECHANGE",
        payload : {
            id: , 
            newMovie: {
                
            }
        }
        
    }
}