const initialSate = {
   designs : [
       {id:1 , name:'Project one' , tshirtcolor : 'black'},
       {id:2 , name:'Project two' , tshirtcolor : 'white'},
   ]
}

const designReducer = (state = initialSate , action) => {
    return state
}

export default designReducer