import React, { Fragment } from 'react'
import GifGridItem from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category})=>{

    const { data, loading } = useFetchGifs( category );

    return(
        <Fragment>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }
             <div className="card-grid">
                {
                    data.map( gif=> (
                        <GifGridItem 
                            key={gif.id}
                            //Paso como props la desestruturacion del objecto 
                            {...gif}
                        />
                    ))
                }
            </div>
        </Fragment>
    );
}

export default GifGrid
