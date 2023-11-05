import React from 'react'

const miReducer = (state={},action) => {
  
    switch(action.type){
        case types.login:
            return{
                estado:true
            }
        case types.logout:
            return{
                estado:false
            }
            default :
                return state;
    }
  
    return (
    <>
      
    </>
  )
}

export default miReducer
