import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { useState } from 'react'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action'
import type { Gif } from './gifs/interfaces/gif.interface'

export const GifsApp = () => {
    const [previousSearches, setPreviousSearches] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const handlePreviousSearchClick = (term: string) => {
        console.log({ term });
    }

    const handleSearch = async (query: string) => {
        // console.log({ query });

        query = query.toLocaleLowerCase().trim();

        if (!query) return;

        if (previousSearches.includes(query)) return;

        setPreviousSearches(prev => [ query, ...prev.splice(0, 7) ]);

        const gifResponse = await getGifsByQuery(query);

        // console.log({gifs});

        setGifs(gifResponse);
    }

    return (
        <>
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

            <SearchBar placeHolder="Buscar lo que quieras" onQuery={ handleSearch } />

            <PreviousSearches searches={ previousSearches } onPreviousSearchClick={ handlePreviousSearchClick } />

            <GifList gifs={ gifs } />
        </>
    );
}
