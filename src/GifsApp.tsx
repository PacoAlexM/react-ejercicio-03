import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { useState } from 'react'

export const GifsApp = () => {
    const [previousSearches, setPreviousSearches] = useState(['pokemon']);

    const handlePreviousSearchClick = (term: string) => {
        console.log({ term });
    }

    const handleSearch = (query: string) => {
        // console.log({ query });

        query = query.toLocaleLowerCase().trim();

        if (!query) return;

        if (previousSearches.includes(query)) return;

        setPreviousSearches(prev => [ query, ...prev.splice(0, 7) ]);
    }

    return (
        <>
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

            <SearchBar placeHolder="Buscar lo que quieras" onQuery={ handleSearch } />

            <PreviousSearches searches={ previousSearches } onPreviousSearchClick={ handlePreviousSearchClick } />

            <GifList gifs={ mockGifs } />
        </>
    );
}
