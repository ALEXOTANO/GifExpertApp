// import { useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([])
    
    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            { loading && <p className="animate__animated animate__fadeIn">Cargando... </p> }
            <ol>
                {images.map( img =>(
                    <GifGridItem
                    {...img} 
                    key={img.id}/>
                ))}
            </ol>
        </>
    )
}
