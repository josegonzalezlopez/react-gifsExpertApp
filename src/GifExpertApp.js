import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () =>{

    // , 'League of Legends', 'Diablo III'
     const [categories, setCategories] = useState(['World of Warcraft'])

    /*const handleAdd = ()=> {
        Con el operador spread extraigo los valores previos de categories
        setCategories([...categories, 'Overwatch']);
        
        setCategories puede recibir un callback donde el primer argumento
        es valor del estado anterior
        setCategories(catego=> [...catego, 'Overwatch']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                   categories.map( category => (
                       <GifGrid 
                        key={category}
                        category={category} />
                   ))  
                }
            </ol>
        </>
    );
}

export default GifExpertApp;