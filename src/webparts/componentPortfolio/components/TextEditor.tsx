import * as React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
  
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FaBars , FaTimes,FaRegEdit} from "react-icons/fa";

export default function PopupGfg(props:any){
  return(
   <Popup
    trigger={<button className="button"> <FaRegEdit/> </button>}
    modal
    nested
    contentStyle={{ width: '85%' , height:'60%'}}
  >
    <div>
       <div>
        <h1>Edit Page</h1>
        <FaBars style={{ position: 'absolute',
    top: '14%',
    left: '95%'}}
   /><FaTimes style={{ position: 'absolute',
   top: '14%',
   left: '98%'}}/>
       </div>


       <div >
        <div>
        <strong>Name</strong>
        <br></br>
        <input value={"Component-Portfolio"}/>
        <span>.aspx</span>
        </div>
         <div style={{position: 'absolute', top: '20%', left: '40%'}}>
        <strong>Title</strong>
        <br></br>
        <input defaultValue={"Component-Portfolio"}/>
        </div>


        <div style={{position: 'absolute', top: '20%', left: '72%'}}>
        <strong>Item Rank</strong>
        <br></br>
        <select id="item-Rank">
  <option value="Top">(7) Top Highlights</option>
  <option value="Featured">(6) Featured Item</option>
  <option value="Key">(5) Key Item</option>
  <option value="Relevant" >(4) Relevant Item</option>
  <option value="Featured">(3) Unsure</option>
  <option value="Relevant" >(2) to be verified</option>
  <option value="Featured">(1) Archieve</option>
  <option value="Key">(0) No Show</option>
</select>
</div>
       </div>
                <Editor
         toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
         wrapperStyle={{ width: '100%', border: "2px solid black", height:'50%' }}
      />
              
    </div>
  </Popup>
  )
};