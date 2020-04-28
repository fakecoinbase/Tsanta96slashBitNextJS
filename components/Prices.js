import { useState } from 'react';

const Prices = (props) => {
    const [currency, setCurrency] = useState('USD');
    console.log(props.bpi);

    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    Bitcoin rate for {props.bpi.USD.description}
                    : <span className="badge badge-primary">{props.bpi.USD.code}</span>
                    <strong className="ml-2">{props.bpi.USD.rate}</strong>
                </li>
            </ul>
        </div>
    )
}

export default Prices;