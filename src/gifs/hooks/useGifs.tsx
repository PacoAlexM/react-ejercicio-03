import { useState, useRef } from 'react'
import { getGifsByQuery } from '../actions/get-gifs-by-query.action'
import type { Gif } from '../interfaces/gif.interface'

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousSearches, setPreviousSearches] = useState<string[]>([]);

    // const gifsCache: Record<string, Gif[]> = {};
    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handlePreviousSearchClick = async (term: string) => {
        // console.log({ term });

        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }

        const gifResponse = await getGifsByQuery(term);

        setGifs(gifResponse);
    }

    const handleSearch = async (query: string) => {
        // console.log({ query });

        query = query.toLocaleLowerCase().trim();

        if (!query) return;

        if (previousSearches.includes(query)) return;

        setPreviousSearches(prev => [ query, ...prev.splice(0, 7) ]);

        const gifResponse = await getGifsByQuery(query);
        
        // console.log({gifs});
        // console.log({gifResponse});
        
        setGifs(gifResponse);

        gifsCache.current[query] = gifResponse;
    }

    return {
        gifs,
        previousSearches,
        handlePreviousSearchClick,
        handleSearch,
    };
}
