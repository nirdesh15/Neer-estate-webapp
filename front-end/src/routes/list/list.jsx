import React from 'react'; // Don't forget to import React
import Card from '../../component/card/card'; // Correct import path
import Filter from '../../component/filter/filter';
import {listData} from '../../lib/dummy';
import './list.scss';
import Map from '../../component/map/map';

function List() {
    const data = listData;
    return (
        <div className='listpage'>
            <div className="ListContainer">
                <div className="wrapper">
                  
                    {data.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
           
        </div>
    );
}

export default List;
