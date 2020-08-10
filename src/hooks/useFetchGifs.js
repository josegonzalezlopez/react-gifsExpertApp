import { useState, useEffect } from "react"
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category )=> {

    const [state, setState] = useState ({
        data: [],
        loading: true
    })

    //mediante este hook me aseguro que ejecuto una sola ve el codigo
    // pasandole el array de dependencias vacio
     useEffect(()=> {
         getGifs( category )
             .then( imgs => {
                 console.log(imgs);
                 setState({
                data: imgs,
                loading: false
             });
            })
     }, [ category ])

    return state; // {data: [], loading: true}
}

