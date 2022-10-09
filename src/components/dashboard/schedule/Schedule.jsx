import { slice } from 'core-js/fn/array';
import React, { useState } from 'react';
import Colloborator1 from "../../../assets/images/colloborator1.jpeg"
import Colloborator2 from "../../../assets/images/colloborator2.jpeg"
import Sender1 from "../../../assets/images/sender1.jpeg"
import Sender2 from "../../../assets/images/sender2.jpeg"
import { ArrowLeft, ArrowRight, Calender, CancelIcon, Dashboard } from '../../../shared/icons';

import './Schedule.css';

const Emoji = ["1F60A", "1F600", "1F389", "1F601", "1F602", "1F603", "1F604", "1F605", "1F606", "1F381", "1F44D", "1F4CC"]
const Schedule = () => {
    const [emojiIndex, setEmojiIndex] = useState({start: 0, end:6});
    const [emojiValue, setEmojiValue] = useState(Emoji.slice(0, 7));

    const onNavEmoji = (point) => {
        if(point === 'left') {
            const startIndex = emojiIndex.start === 0? Emoji.length-1:emojiIndex.start-1;
            const endIndex = emojiIndex.end === 0? Emoji.length-1:emojiIndex.end-1;
            emojiValue.splice(emojiValue.length-1, emojiValue.length);
            emojiValue.unshift(Emoji[startIndex]);
            setEmojiIndex({...emojiIndex, start:startIndex, end:endIndex})
        }else {
            const endIndex = Emoji.length === emojiIndex.end+1? 0:emojiIndex.end+1;
            const startIndex = Emoji.length === emojiIndex.start+1? 0:emojiIndex.start+1;
            emojiValue.splice(0, 1);
            emojiValue.push(Emoji[endIndex]);
            setEmojiIndex({...emojiIndex, end:endIndex, start: startIndex})
        }
        setEmojiValue([...emojiValue])   
    }

   
    return (
       <div className="schedule-container">
       <div className="schedule-content">
           <div className='space-between'>
               <span className="today">Today’s Schedudle</span>
               <span className="dash-calender cursor"><Dashboard/> <Calender/></span>
           </div>
           <div className="new-task">New Task</div>
           <div className="label">Task Title</div>
           <div><input placeholder="Create new" className="schedule-input"/></div>
   
           <div className="emoji">
               <span className="cursor" onClick={()=>onNavEmoji('left')}><ArrowLeft/></span>
    <div className="emoji-items">{emojiValue.map((val, i)=>(<span key={i} className="emoji-item">{String.fromCodePoint("0x"+val)}</span>))}</div>
               <span className="cursor"  onClick={()=>onNavEmoji('right')}><ArrowRight/></span>
           </div>
           <div>
               <span className="add-colloborator">Add Collaborators</span>
               <div className="colloborator-items">
                   <span className="colloborator-item">
                       <img src={Colloborator1} className="collo-img" alt="Colloborator1"/><span className="collo-name name1">Angela</span><span className="cursor"><CancelIcon color="#5051F9"/></span>
                   </span>
                   <span className="colloborator-item">
                       <img src={Colloborator2} className="collo-img" alt="Colloborator2"/><span className="collo-name name2">Chris</span><span className="cursor"><CancelIcon color="#1EA7FF"/></span>
                   </span>
                   <span className="add-collob cursor">
                       +
                   </span>
                   <span className="nav-collob cursor">
                       <ArrowRight color="#ffffff"/>
                   </span>
               </div>
           </div>

            <div>
                    <div className="label">Time To Complete</div>
                    <div className="form-input start-date">
                        <span className="calender cursor"><Calender/></span>
                        <input placeholder="Start Date" className="schedule-input"/>
                    </div>

                    <div className="form-input end-date">
                        <span className="calender cursor"><Calender/></span>
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
                    <button className="btn cursor">Save</button>
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