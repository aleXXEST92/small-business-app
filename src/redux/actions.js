export const addBusiness = (business) => {
    return {
        type: 'ADD_BUSINESS',
        value: business
    }
}

export const deleteBusiness = (index) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}

