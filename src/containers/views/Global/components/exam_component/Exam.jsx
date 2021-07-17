import  React, { useState , useRef, useEffect } from 'react';
import './Exam.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const ques_no = [
    {id:1,quest_no:1},{id:2,quest_no:2},{id:3,quest_no:3},{id:4,quest_no:4},{id:5,quest_no:5},
    {id:6,quest_no:6},{id:7,quest_no:7},{id:8,quest_no:8},{id:9,quest_no:9},{id:10,quest_no:10},
    {id:11,quest_no:11},{id:12,quest_no:12},{id:13,quest_no:13},{id:14,quest_no:14},{id:15,quest_no:15},
    {id:16,quest_no:16},{id:17,quest_no:17},{id:18,quest_no:18},{id:19,quest_no:19},{id:20,quest_no:20},
    {id:21,quest_no:21},{id:22,quest_no:22},{id:23,quest_no:23},{id:24,quest_no:24},{id:25,quest_no:25},
    {id:26,quest_no:26},{id:27,quest_no:27},{id:28,quest_no:28},{id:29,quest_no:29},{id:30,quest_no:30},
];

const quest_type = [
    {id:1,title:'Answered',color:'#31B203',data:0},{id:2,title:'Not Answered',color:'#CD3805',data:0},
    {id:3,title:'Not Verifyed',color:'#565656',data:10},{id:4,title:'Marked for Review',color:'#674786',data:6},
    {id:5,title:'Lorem isupsum doller sit amet doller sit lorem',color:'#674786',data:20}
];
const Exam = () => {
    const [stream, setStream] = useState('');
    


    useEffect(() => {
        
    },[]);

    
    return (
        <div className="row_full examBox">
            <div className="container-flud">
                <div className="row_full pad_r_230 pos_relative">
                    <div className="fix_wd pos_top">
                        <div className="row_full pad_a_10 btn-info pos_relative">

                            <span className="timeCount">Time Left - <strong>56:45</strong></span>
                            <ul className="no_marg pull-right noBox">
                                <li>Marks for correct answer 3 | Negative Marks 1</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row_full ansBox bg_white">
                        Question Listing area
                    </div>

                    <div className="row_full mar_t_33">
                        <a href="javascript:void(0);" className="btn btn-info btn-xs">Save & Next</a>

                        <div className="pull-right">
                            <a style={{marginRight:'15px'}} href="javascript:void(0);" className="btn btn-success btn-xs">Mark for Review & Next</a>
                            <a href="javascript:void(0);" className="btn btn-warning btn-xs">Clear Responce</a>
                        </div>
                    </div>

                </div>
                <div className="studentDtlsBox">
                    <div className="row_full">
                        <h4 className="title row_full">Verbal Ability and Research</h4>
                        <div className="row_full chooseQues">
                            <div className="row_full selQElm">Choose a question</div>
                            <div className="row_full">
                                <ul className="row_full quesList">
                                    {ques_no.map((x,y)=>
                                        <li key={x.id}>
                                            <a href="javascript:void(0);">{x.quest_no}</a>
                                        </li>
                                    )}
                                </ul>                                
                                <div className="row_full">
                                    <ul className="row_full quest_note">
                                        {quest_type.map((x,y)=>
                                            <li key={x.id}>
                                                <a href="javascript:void(0);"><span style={{background:`${x.color}`}}>{x.data}</span><span>{x.title}</span></a>
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                <div className="row_full"><a className="btn btn-success btn-xs" href="javascript:void(0)">Submit</a></div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}


export default Exam;