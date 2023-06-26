import {React, Link} from 'react'
<Link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
const arr = [['01', 'JAN'], ['08', 'JAN'], ['15', 'JAN'], ['22', 'JAN'], ['29', 'JAN'], ['05', 'FEB'], ['12', 'FEB'], ['19', 'FEB'], ['26', 'FEB'], ['05', 'MAR'], ['12', 'MAR'], ['19', 'MAR'], ['26', 'MAR'], ['02', 'APR'], ['09', 'APR'], ['16', 'APR'], ['23', 'APR'], ['30', 'APR'], ['07', 'MAY'], ['14', 'MAY'], ['21', 'MAY'], ['28', 'MAY'], ['04', 'JUN'], ['11', 'JUN'], ['18', 'JUN'], ['25', 'JUN'], ['02', 'JUL'], ['09', 'JUL'], ['16', 'JUL'], ['23', 'JUL'], ['30', 'JUL'], ['06', 'AUG'], ['13', 'AUG'], ['20', 'AUG'], ['27', 'AUG'], ['03', 'SEP'], ['10', 'SEP'], ['17', 'SEP'], ['24', 'SEP'], ['01', 'OCT'], ['08', 'OCT'], ['15', 'OCT'], ['22', 'OCT'], ['29', 'OCT'], ['05', 'NOV'], ['12', 'NOV'], ['19', 'NOV'], ['26', 'NOV'], ['03', 'DEC'], ['10', 'DEC'], ['17', 'DEC'], ['24', 'DEC'], ['31', 'DEC']];
export default function Run({val}) {
  return (
    <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" style={{backgroundColor: "darkblue"}} onClick={() => {}}>
                        {/* {text1} */}
                    </button>
                    <div className="option" style={{overflowY:"scroll", height:"1in"}}>
                        {
                            // builds ?
                                arr.map((val, index) => {
                                    return (
                                        <label className="dropdown-items" key={index}><span>{val}</span></label>
                                    )
                                })
                                // : <></>
                        }
                    </div>
                </div>
  )
}
