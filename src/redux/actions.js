
export const addBusiness = (business) => {
    return {
        type: 'ADD_LISTING',
        value: business
    }
}

export const deleteBusiness = (index) => {
    return {
        type: 'REMOVE_LISTING',
        value: index
    }
}

