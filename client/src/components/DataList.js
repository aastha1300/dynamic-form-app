import React, { useState, useEffect } from 'react';
import api from '../api';

function DataList() {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(false); // Ensure loading state is defined

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/forms');
            setEntries(response.data);
        };
        fetchData();
    }, []);

    const handleExport = async () => {
        setLoading(true); // Set loading to true when starting the export
        try {
            const response = await api.get('/export-excel', { responseType: 'blob' });
            // Create a URL for the blob
            const url = window.URL.createObjectURL(new Blob([response.data]));
            // Create a link element to download the file
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'forms_data.xlsx'); // Specify the file name
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error exporting data:', error);
            alert('Failed to export data');
        } finally {
            setLoading(false); // Set loading to false when done
        }
    };

    return (
        <div>
            <h2>Form Entries</h2>
            <button onClick={handleExport} disabled={loading}>
                {loading ? 'Exporting...' : 'Export to Excel'}
            </button>
            <table style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Form Type</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Country Code</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((entry) => (
                        <tr key={entry.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{entry.formType}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{entry.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{entry.countryCode}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{entry.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataList;
