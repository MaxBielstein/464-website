import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../css/financeAPI.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const FinanceAPI = () => {
    const [ticker, setTicker] = useState('');
    const [period, setPeriod] = useState('1d');
    const [chartData, setChartData] = useState({});
    const [apiError, setApiError] = useState('');
    const fetchTimer = useRef(null);

    useEffect(() => {
        // Some complicated code to make sure I don't spam the API
        if (fetchTimer.current) {
            clearTimeout(fetchTimer.current);
        }
        fetchTimer.current = setTimeout(() => {
            if (ticker && period) {
                fetchStockData(ticker, period);
            }
            fetchTimer.current = null;
        }, 1000);

        return () => {
            if (fetchTimer.current) {
                clearTimeout(fetchTimer.current);
            }
        };
    }, [ticker, period]);

    const handleTickerChange = (event) => {
        setTicker(event.target.value);
        setApiError('');
    };

    const handlePeriodChange = (event, newPeriod) => {
        if (newPeriod !== null) {
            setPeriod(newPeriod);
            setApiError('');
        }
    };

    const fetchStockData = async (ticker, period) => {
        try {
            const baseUrl = 'https://api.polygon.io/v2/aggs/ticker';
            let multiplier = 1;
            let timespan = 'day';

            switch (period) {
                case '1wk':
                    multiplier = 7;
                    timespan = 'day';
                    break;
                case '1mo':
                    multiplier = 1;
                    timespan = 'month';
                    break;
                default:
                    break;
            }

            const fromDate = new Date();
            fromDate.setFullYear(fromDate.getFullYear() - 1);
            const toDate = new Date();

            const from = fromDate.toISOString().split('T')[0];
            const to = toDate.toISOString().split('T')[0];

            // I am not worried about the API key being in the front-end as this is a free API
            const url = `${baseUrl}/${ticker}/range/${multiplier}/${timespan}/${from}/${to}?apiKey=NioIDz0PlrlTkHiTxwi5xYqdbpweqPAm`;

            const response = await axios.get(url);
            const { results } = response.data;

            const dates = results.map(data => new Date(data.t).toLocaleDateString());
            const prices = results.map(data => data.c);

            setChartData({
                labels: dates,
                datasets: [{
                    label: `${ticker} Stock Price`,
                    data: prices,
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                }]
            });
            setApiError('');
        } catch (error) {
            if (error.response && error.response.status === 429) {
                setApiError('Too many API requests. This website uses a free API that has a request limit of 5 requests a minute. Please wait a minute and try again.');
            } else {
                console.error('Error fetching stock data:', error);
            }
        }
    };

    return (
        <div className="stock-history-page">
            <div className="container">
                <TextField
                    label="Enter Ticker Symbol"
                    variant="outlined"
                    value={ticker}
                    onChange={handleTickerChange}
                    style={{ marginBottom: '20px' }}
                />
                <ToggleButtonGroup
                    color="primary"
                    value={period}
                    exclusive
                    onChange={handlePeriodChange}
                >
                    <ToggleButton value="1d">Daily</ToggleButton>
                    <ToggleButton value="1wk">Weekly</ToggleButton>
                    <ToggleButton value="1mo">Monthly</ToggleButton>
                </ToggleButtonGroup>
                {chartData.labels ? <Line data={chartData} /> : null}
                {apiError && <div style={{ color: 'red', marginTop: '20px' }}>{apiError}</div>}
            </div>
        </div>
    );
};

export default FinanceAPI;
