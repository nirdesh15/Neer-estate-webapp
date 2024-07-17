import './lists.scss';
import Card from  "../card/card";
import {listData} from  "../../lib/dummy";


function Lists() {
  return (
    <div className='lists'>
        {listData.map(item=>(
            <Card key= {item.id} item={item}/>



        ))}
        </div>
  )
}

export default Lists