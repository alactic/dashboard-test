import React from 'react';
import Colloborator1 from "../../../assets/images/colloborator1.jpeg"
import Colloborator2 from "../../../assets/images/colloborator2.jpeg"
import Sender1 from "../../../assets/images/sender1.jpeg"
import Sender2 from "../../../assets/images/sender2.jpeg"
import { ArrowLeft, ArrowRight, Calender, CancelIcon, Dashboard } from '../../../shared/icons';

import './Schedule.css';

const Schedule = () => {
    return (
       <div className="schedule-container">
       <div className="schedule-content">
           <div className='space-between'>
               <span className="today">Today’s Schedudle</span>
               <span className="dash-calender"><Dashboard/> <Calender/></span>
           </div>
           <div className="new-task">New Task</div>
           <div className="label">Task Title</div>
           <div><input placeholder="Create new" className="schedule-input"/></div>
           <div className="emoji">
               <ArrowLeft/>
               <ArrowRight/>
           </div>
           <div>
               <span className="add-colloborator">Add Collaborators</span>
               <div className="colloborator-items">
                   <span className="colloborator-item">
                       <img src={Colloborator1} className="collo-img" alt="Colloborator1"/><span className="collo-name name1">Angela</span><CancelIcon color="#5051F9"/>
                   </span>
                   <span className="colloborator-item">
                       <img src={Colloborator2} className="collo-img" alt="Colloborator2"/><span className="collo-name name2">Chris</span><CancelIcon color="#1EA7FF"/>
                   </span>
                   <span className="add-collob">
                       +
                   </span>
                   <span className="nav-collob">
                       <ArrowRight color="#ffffff"/>
                   </span>
               </div>
           </div>

            <div>
                    <div className="label">Time To Complete</div>
                    <div className="form-input start-date">
                        <span className="calender"><Calender/></span>
                        <input placeholder="Start Date" className="schedule-input"/>
                    </div>

                    <div className="form-input end-date">
                        <span className="calender"><Calender/></span>
                        <input placeholder="End Date" className="schedule-input"/>
                    </div>
                </div>

                <div>
                    <div className="label">Hours Budgeted</div>
                    <div>
                        <input placeholder="Enter Hours" className="schedule-input"/>
                    </div>
                </div>

                <div className="save-btn">
                    <button className="btn">Save</button>
                </div>

                <div>
                    <div className="message">Messages</div>
                    <div className="chat-content">
                        <img src={Sender1} alt="messager" className="messenger" />
                        <div className="sender-chat">
                            <div className="sender">Chris Webber</div>
                            <div className="chat">Hi Michael! How are You?</div>
                        </div>
                    </div>
                    <div className="chat-content">
                        <img src={Sender2} alt="messager" className="messenger" />
                        <div className="sender-chat">
                            <div className="sender">Kelvin Durant </div>
                            <div className="chat">Do you need that design?</div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Schedule;