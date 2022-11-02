import React,{useState, useEffect} from 'react';

//API
import { getCoin } from '../Services/api';

//COMPONENTS
import Coin from './Coin';
import Loding from './Loding'

//styles
import styles from './Landing.module.css'

// _________________________________________________________________________________//


const Landing = () => {

    const  [coins , setCoins] = useState([]);
    const  [search , setSearch] = useState ("");



    useEffect( () => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data);
            setCoins(data)
        }

        fetchAPI()

    }, [])

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase())); 


    return (
        <>
 
           <input className={styles.input} text='text' placeholder='search' value={search} onChange={searchHandler} />
           {
               coins.length ?
               <div className={styles.coinContainer}>
                {
                    searchedCoins.map( coin => <Coin  
                       key={coin.id}
                       name={coin.name}
                       image={coin.image}
                       symbol={coin.symbol}
                       price={coin.current_price}
                       marketCap={coin.market_cap}
                       priceChange={coin.price_change_percentage_24h}
                    />)
                }
                </div> :
               <Loding/>
           }
        </>
    );
};

export default Landing;