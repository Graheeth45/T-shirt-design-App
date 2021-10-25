const initialSate = {
    designs : [
        {id:1 , name:'Project one' , tshirtcolor : 'black'},
        {id:2 , name:'Project two' , tshirtcolor : 'white'},
    ]
}

const authReducer = (state = initialSate , action) => {
    return state
}

export default authReducer