import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { useGifs } from './gifs/hooks/useGifs'

export const GifsApp = () => {
    const { gifs, previousSearches, handleSearch, handlePreviousSearchClick } = useGifs();

    return (
        <>
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

            <SearchBar placeHolder="Buscar lo que quieras" onQuery={ handleSearch } />

            <PreviousSearches searches={ previousSearches } onPreviousSearchClick={ handlePreviousSearchClick } />

            <GifList gifs={ gifs } />
        </>
    );
}
