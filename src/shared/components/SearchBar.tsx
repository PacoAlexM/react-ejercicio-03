import { useState, useEffect } from 'react';

interface Props {
    placeHolder?: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({ placeHolder = 'Buscar', onQuery }: Props) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        // console.log('Hola desde el efecto');

        // onQuery(query);

        const timeoutId = setTimeout(() => {
            onQuery(query);
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [query, onQuery]);

    const handleSearch = () => {
        onQuery(query);
        // setQuery('');
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') handleSearch();
    }

    return (
        <div className="search-container">
            <input type="text" placeholder={ placeHolder } value={ query } onChange={ event => setQuery(event.target.value) } onKeyDown={ handleKeyDown } />
            <button onClick={ handleSearch }>Buscar</button>
        </div>
    );
}
