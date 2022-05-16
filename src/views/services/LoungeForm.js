import React from 'react'

const LoungeForm = () => {
  return (
    <div>
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
    </div>
  )
}

export default LoungeForm
