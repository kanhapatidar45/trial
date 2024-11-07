
import './App.css'
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Package from './components/Package';

function App  () {
 const response=[
  {
    itemName:"nirma1",
    day:"20",
    month:"june",
    year:"2001",

  },
  {
    itemName:"nirma2",
    day:"21",
    month:"july",
    year:"2002",

  },

  {
    itemName:"nirma3",
    day:"22",
    month:"aug",
    year:"2003",

  },

 ];
 
  return (
    <Package>
      <div>
       <Item name={response[0].itemName}  >hello jee m hu apki first children</Item>
       <ItemDate day={response[0].day} month={response[0].month} year={response[0].year}></ItemDate>

       <Item name={response[1].itemName}  ></Item>
       <ItemDate day={response[1].day} month={response[1].month} year={response[1].year}></ItemDate>

       <Item name={response[2].itemName}  ></Item>
       <ItemDate day={response[2].day} month={response[2].month} year={response[2].year}></ItemDate>
      <div className="App">hello jee</div>
    </div>
    </Package>
   
  );
}

export default App;
