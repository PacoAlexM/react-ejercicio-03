interface Props {
    searches: string[];
    onPreviousSearchClick: (term: string) => void;
}

export const PreviousSearches = ({ searches, onPreviousSearchClick }: Props) => {
    return (
        <div className="previous-searches">
            <h2>Búsquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    searches.map(item => (
                        <li key={ item } onClick={ () => onPreviousSearchClick(item) }>{ item }</li>
                    ))
                }
            </ul>
        </div>
    );
}
