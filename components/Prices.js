import { useState } from 'react';

const Prices = (props) => {
    const [currency, setCurrency] = useState('USD');
    let list = '';
    if (currency === 'USD') {
        list = <li className="list-group-item">
            Bitcoin rate for {props.bpi.USD.description}
            : <span className="badge badge-primary">{props.bpi.USD.code}</span>
            <strong className="ml-2">{props.bpi.USD.rate}</strong>
        </li>
    } else if (currency === 'GBP') {
        list = <li className="list-group-item">
            Bitcoin rate for {props.bpi.GBP.description}
            : <span className="badge badge-primary">{props.bpi.GBP.code}</span>
            <strong className="ml-2">{props.bpi.GBP.rate}</strong>
        </li>
    } else if (currency === 'EUR') {
        list = <li className="list-group-item">
            Bitcoin rate for {props.bpi.EUR.description}
            : <span className="badge badge-primary">{props.bpi.EUR.code}</span>
            <strong className="ml-2">{props.bpi.EUR.rate}</strong>
        </li>
    }

    return (
        <div>
            <ul className="list-group">
                {list}
            </ul>
            <br/>
            <select 
                onChange={e => setCurrency(e.target.value)} 
                className="form-control">
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
            </select>
        </div>
    )
}

export default Prices;