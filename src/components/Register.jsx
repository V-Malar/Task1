import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/style.css';
const arr = [['01', 'JAN'], ['08', 'JAN'], ['15', 'JAN'], ['22', 'JAN'], ['29', 'JAN'], ['05', 'FEB'], ['12', 'FEB'], ['19', 'FEB'], ['26', 'FEB'], ['05', 'MAR'], ['12', 'MAR'], ['19', 'MAR'], ['26', 'MAR'], ['02', 'APR'], ['09', 'APR'], ['16', 'APR'], ['23', 'APR'], ['30', 'APR'], ['07', 'MAY'], ['14', 'MAY'], ['21', 'MAY'], ['28', 'MAY'], ['04', 'JUN'], ['11', 'JUN'], ['18', 'JUN'], ['25', 'JUN'], ['02', 'JUL'], ['09', 'JUL'], ['16', 'JUL'], ['23', 'JUL'], ['30', 'JUL'], ['06', 'AUG'], ['13', 'AUG'], ['20', 'AUG'], ['27', 'AUG'], ['03', 'SEP'], ['10', 'SEP'], ['17', 'SEP'], ['24', 'SEP'], ['01', 'OCT'], ['08', 'OCT'], ['15', 'OCT'], ['22', 'OCT'], ['29', 'OCT'], ['05', 'NOV'], ['12', 'NOV'], ['19', 'NOV'], ['26', 'NOV'], ['03', 'DEC'], ['10', 'DEC'], ['17', 'DEC'], ['24', 'DEC'], ['31', 'DEC']];
export default function Register() {
    const [details, fetchdetails] = useState([]);
    const [builds, setBuilds] = useState(false);
    const [builde, setBuilde] = useState(false);
    const [text1, setText1] = useState('Start Week');
    const [text2, setText2] = useState('End Week');
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0)
    const [output, setOutput] = useState([]);;
    const [hw, sethw] = useState(0);
    const hourweek = useRef();
    const [classname, setclassName] = useState("none");
    const [classdd, setclassdd] = useState("dropdown");
    const [classoutput, setclassoutput] = useState("none");
    useEffect(() => {
        var res = arr.slice(start, end + 1);
        setOutput(res);
    }, [start, end]);
    function display() {
        console.log(start);
        console.log(end);
        sethw(hourweek.current.value);
        setclassName('outview');
        setclassoutput('outview2');
        setclassdd("none");
    }
    function handleSubmit(e) {
        e.preventDefault();
        const newObj = { duration: output.flat().join(' '), count: output.length, hours: output.length * 168, cost: output.length * 100 };
        fetchdetails(prevObj => [...prevObj, newObj]);
        setText1('Start Week'); setText2('End week');
        hourweek.current.value = '';
        setclassName("none");
        setclassdd("dropdown");
    }
    const deleteTask = (taskmatch) => {
        let del = details.filter((task) => task !== taskmatch);
        fetchdetails(del);
        console.log(fetchdetails(del));
    }

    return (
        <div>
            <div className="head">Role: Pursuit Manager Cost/hour: $5 View: Weekly</div>
            <div className="year"><h1>2022</h1><h1>2023</h1><h1>2024</h1></div>
            <div className="initial">
                <div className="move">
                    <div className="numbers">
                        {
                            arr.map((val, index) => {
                                return (
                                    <div key={index} className="no">
                                        {
                                            val.map((val1, index) => {
                                                return (
                                                    <>
                                                        <label className="nohover" key={index}>{val1}</label>
                                                        <br />
                                                    </>
                                                )
                                            })}
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                    <div className="centered-div">
                        <div className="dropdownclass">
                            <div className={classdd}><h4>Start week</h4>
                                <button className="btn btn-secondary dropdown-toggle" style={{ backgroundColor: "darkblue", fontSize: "20px", cursor: "pointer" }} onClick={() => { setBuilds(!builds); console.log(builds); }}>
                                    {text1}
                                </button>
                                {
                                    builds ?
                                        <div className="options">
                                            {
                                                arr.map((val, index) => {
                                                    return (
                                                        <label className="dropdown-items" key={index} onClick={() => { setText1(val); setStart(index); setBuilds(!builds); }}><span>{val}</span></label>
                                                    )
                                                })

                                            }
                                        </div> : <></>
                                }
                            </div>
                            <div className={classdd}><h4>End week</h4>
                                <button className="btn btn-secondary dropdown-toggle" style={{ backgroundColor: "darkblue", fontSize: "20px", cursor: "pointer" }} onClick={() => { setBuilde(!builde); console.log(builde); }}>
                                    {text2}
                                </button>
                                {
                                    builde ?
                                        <div className="options">
                                            {

                                                arr.map((val, index) => {
                                                    return (

                                                        <label className="dropdown-items" key={index} onClick={() => { setText2(val); setEnd(index); setBuilde(!builde); }}><span>{val}</span></label>
                                                    )
                                                })
                                            }
                                        </div> : <></>
                                }

                                <h4 id="hwcounth">Hour/ week</h4>
                                <input type="text" id="hwcount" ref={hourweek} required />
                            </div></div>
                        <form className="inputfields">
                            <input type="button" id="submit" value="CREATE RANGE" onClick={()=>{output.length > 1 ? display(): alert('Weeks should greater than 1');setText1('Start Week');setText2('End week');hourweek.current.value = '';}}/>
                            <input type="submit" id="ok" onClick={handleSubmit} value="Ok" />
                            <input type="button" id="cancel" onClick={() => { setText1('Start Week'); setText2('End week'); hourweek.current.value = ''; setclassName("none"); setclassdd("dropdown"); }} value="Cancel" />
                        </form>
                    </div >
                </div>
            </div>
            {
                output.length > 0 && hw !== '' ?
                    <div className={classname}>

                        <p><span className="thick">Total Weeks</span> {output.length}</p>
                        <p><span className="thick">Hour/week</span> {hw}</p>
                        <p><span className="thick">$ </span>{hw * 100}</p>
                        <br />
                    </div> : <h2 className={classname}>Press cancel and fill out the fields.. </h2>
            }
            <div className="v1_2">
                <div className="v1_3"></div>
                <div className="v1_5"></div>
                <div className="v1_12"></div>
                <div className="v1_6"></div>
                <div className={classoutput}>
                    {
                        details ? details.map((val, index) => {
                            return (
                                <div keys={index} style={{ position: "relative" }}>
                                    <div className="v1_9"></div>
                                    <div className="v1_101">Pursuit Manager</div>
                                    <div className="v1_102">Cost $ {val.cost}</div>
                                    <div className="v1_103">India</div>
                                    <div className="v1_105">{val.count}</div>
                                    <div className="v1_104">{val.hours} </div>
                                    <div className="v1_11" onClick={() => deleteTask(val)}><i className="w3-jumbo w3-spin fa fa-trash" style={{ color: "green", cursor: "pointer" }}></i></div>
                                    <br /><br />
                                </div>
                            )
                        }
                        ) : <></>
                    }
                </div>
                <span className="v1_19">Role</span>
                <span className="v1_20">Region</span>
                <span className="v1_21">Cost/Hour</span>
                <span className="v1_23">Weeks</span>
                <span className="v1_24">Cost</span>
                {
                details ? details.map((val, index) => {
                    return (
                        <div className="outview3" key={index}>
                            <p><span className="thick">Pursuit Manager</span></p>
                            <p><span className="thick">Cost $ {val.cost}</span></p>
                            <p><span className="thick">India</span></p>
                            <p><span className="thick">{val.count}</span></p>
                            <p><span className="thick">{val.hours} </span></p>
                            <p><span className="thick" onClick={() => deleteTask(val)}><i className="w3-jumbo w3-spin fa fa-trash" style={{ color: "green", cursor: "pointer" }}></i></span></p>
                            <br /><br />
                        </div>
                    )
                }
                ) : <></>
            }
            </div>
        </div >
    )
}