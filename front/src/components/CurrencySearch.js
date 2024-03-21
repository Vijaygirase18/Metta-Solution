import React, { useState } from 'react';
import './CurrencySearch.css';

const CurrencySearch = () => {
    const [currencyCode, setCurrencyCode] = useState('');
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');
    const [displayFormat, setDisplayFormat] = useState('list');

    const handleSearch = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code: currencyCode })
            });
            const data = await response.json();
            if (data.error) {
                setError(data.error);
                setCountries([]);
            } else {
                setCountries(data.countries);
                setError('');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Server error.');
            setCountries([]);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const renderCountries = () => {
        switch (displayFormat) {
            case 'grid':
                return (
                    <div className="image-grid">
                        {countries.map((country, index) => (
                            <div key={index} className="country-container">
                                {country.flag && <img src={country.flag} alt={`${country.name} Flag`} />}
                                <p><strong>Name:</strong> {country.name}</p>
                                <p><strong>Capital:</strong> {country.capital}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'table':
                return (
                    <table class="table table-striped">
                        {<thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Capital</th>
                            </tr>
                        </thead>}

                        <tbody>
                            {countries.map((country, index) => (
                                <tr key={index}>
                                    <td>{country.name}</td>
                                    <td>{country.capital}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                );
            default:
                return (
                    <div>
                        {countries.map((country, index) => (
                            <div key={index} className="country-container">
                                {country.flag && <img src={country.flag} alt={`${country.name} Flag`} />}
                                <p><strong>Name:</strong> {country.name}</p>
                                <p><strong>Capital:</strong> {country.capital}</p>
                            </div>
                        ))}
                    </div>
                );
        }
    };

    return (
        <div className="CurrencySearch">
            <h1>Find Countries by Currency</h1>
            <div className="search-bar">
                <input
                    type="text"
                    value={currencyCode}
                    onChange={(e) => setCurrencyCode(e.target.value.toUpperCase())}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter Currency Code (e.g., USD)"
                />
                <button className="btn btn-primary" onClick={handleSearch}>Search</button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="display-options">
                <button className={displayFormat === 'list' ? 'active' : ''} onClick={() => setDisplayFormat('list')}>List</button>
                <button className={displayFormat === 'grid' ? 'active' : ''} onClick={() => setDisplayFormat('grid')}>Grid</button>
                <button className={displayFormat === 'table' ? 'active' : ''} onClick={() => setDisplayFormat('table')}>Table</button>
            </div>
            {countries.length > 0 && (
                <div className="countries-list">
                    <p><strong>Countries using {currencyCode}:</strong></p>
                    {renderCountries()}
                </div>
            )}
        </div>
    );
};

export default CurrencySearch;
