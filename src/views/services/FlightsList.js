import axios from 'axios';
import React,{useEffect,useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import Datajson from '../../Data.json';

const FlightsList = () => {

    const [data,setData] = useState("Datajson");

    useEffect(() => {
        getData();
    },[]);

    const getData = () => {
        axios("src/Data.json").then((res) =>console.log(res.data))
    }

    const colums = [
        {dataField:"firstname", text:"First Name"},
        {dataField:'middlename', text:"Middle Name"},
        {dataField:"lastname", text:"Last Name"}
    
    ]

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-10 mt-5 pt-5'>
               <div className='box'>
                   <div className='adanget'>
                       <div className='widget_title'>
                           <div>
                               <span className="iconsweet"></span><h5 className=''>Flights Records</h5>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
            <div className='col-md-2 mt-5 pt-5 '>
                <div className='row'>
                <button type='button' className='btn btn-primary'>FlightForms</button>
                <button type='button' className='btn btn-primary'>FlightsList</button>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default FlightsList
