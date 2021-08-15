import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function StHome() {
  const [user, setUser] = useState("");
  const [allLectures,setAllLectures] = useState([])
  // const [lecturesData,setlecturesData] = useState([])
  const [lecture, setLecture] = useState({
    title:'',
    subject: "",
    topic: "",
    scheduledUpTime: "",
    scheduledEndTime: "",
  });
  const onChange=(e)=>{
    setLecture({
      ...lecture,
      [e.target.name]: e.target.value,
  })
}
const handleSchedule=()=>{
  
  setAllLectures([
    ...allLectures,
    lecture,
  ])  
}
useEffect(() => {
  if(allLectures.length > 0){
    localStorage.setItem('AllLectures',JSON.stringify(allLectures));
  }
  

},[allLectures])

console.log("lecture",lecture);
useEffect(()=> {
  console.log("alllectures",allLectures);
},[allLectures])


  // open A dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("PersonalDetail")) {
      const user = JSON.parse(localStorage.getItem("PersonalDetail"));
      setUser(user);
    }
    if(localStorage.getItem("AllLectures")){
      const allLectures = JSON.parse(localStorage.getItem("AllLectures"));
      setAllLectures(allLectures);
    }
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6 px-5 pt-5">
      <div className="col-span-12">
        <p className="text-xs uppercase opacity-70">Welcome</p>
        <h1 className="text-xl opacity-80 ">{user ? user.FirstName : ""}</h1>
      </div>
      <div className="col-span-6 bg-white rounded-xl shadow h-[200px]">
        <div className="px-2 pt-4 text-xs font-bold uppercase opacity-70">
          Upcomming Session
        </div>
        <div className="flex flex-col items-center justify-center w-full pt-4 opacity-80 overflow-y-scroll h-40">
          {/* <button
            onClick={handleClickOpen}
            className="text-lg h-[80px] w-[200px] hover:text-white text-white bg-[#1e56a0] opacity-95 rounded-full hover:opacity-100 text-center"
          >
            Schedule A Lecture
          </button> */}
          {allLectures.length === 0? 'No Lectures':
      <>
      {allLectures.map((item,i)=>(
      <div key={i} className='w-full border-2 shadow-lg rounded-lg p-2'>
        <div className='grid grid-cols-12 gap-3 '>
          <div className='col-span-9'>
            <h1>Title: <spn className='text-lg text-gray-500 font-medium'>{item.title}</spn></h1>
            <div className='grid grid-cols-12 gap-2 text-center'>
            <h1 className='col-span-2 mt-2 text-xs text-gray-500 font-medium'>Subject: <spn className='text-xs text-gray-500 font-medium'>{item.subject}</spn></h1>

            <div className='col-span-2 mt-2 text-xs text-gray-500 font-medium'>Topic: <spn>{item.topic}</spn></div>
            <div className='col-span-4 mt-2 text-xs text-gray-500 font-medium'>Date and Time: {item.scheduledUpTime} </div>
            <div className='col-span-3 mt-2 text-xs text-gray-500 font-medium'>End Time: <span>{item.scheduledEndTime}</span></div>
            </div>
          </div>
          <div className='col-span-3 bg-green-500 flex justify-center items-center rounded-lg text-white text-center'>
            <button>Join Now</button>
          </div>
          </div>  
      </div>
      
      ))}
      </>
      }
        </div>
      </div>
      <div className="col-span-4 h-[200px]">
        {/* <div className="grid grid-cols-12 gap-2 px-1 pt-6">
          <div className="col-span-6 px-2 pt-4 text-xs font-bold uppercase opacity-70">
            Start Session
          </div>
          <div className="flex items-center justify-center col-span-6 px-2 pt-4 text-xs font-bold uppercase opacity-70">
            <p>12</p>
            <p>:</p>
            <p>00</p>
            <p>:</p>
            <p>59</p>
          </div>
          <div className="col-span-6 px-2 pt-4 text-xs font-bold uppercase opacity-70">
            End Session
          </div>
          <div className="flex items-center justify-center col-span-6 px-2 pt-4 text-xs font-bold uppercase opacity-70">
            <p>12</p>
            <p>:</p>
            <p>00</p>
            <p>:</p>
            <p>59</p>
          </div>
          <div className="col-span-6 px-2 pt-4 text-xs font-bold uppercase opacity-70">
            Total Duration
          </div>
          <div className="flex items-center justify-center col-span-6 px-2 pt-4 text-xs font-bold uppercase opacity-70">
            <p>12</p>
            <p>:</p>
            <p>00</p>
            <p>:</p>
            <p>59</p>
          </div>
        </div> */}
      </div>
      <div className='col-span-6'>
      <h1 className="text-lg opacity-80 ">Events</h1>
      </div>
      <div className='col-span-6'>
      <h1 className="text-lg opacity-80 ">1-ON-1</h1>
      </div>
    
    <div className='col-span-6 border-2 relative h-52 shadow-lg rounded-lg p-2 overflow-y-scroll'>
      {allLectures.length === 0? 'No Lectures':
      <>
      {allLectures.map((item,i)=>(
      <div key={i} className='w-full border-2 shadow-lg rounded-lg p-2'>
        <div className='grid grid-cols-12 gap-3 '>
          <div className='col-span-9'>
            <h1>Title: <spn className='text-lg text-gray-500 font-medium'>{item.title}</spn></h1>
            <div className='grid grid-cols-12 gap-2 text-center'>
            <h1 className='col-span-2 mt-2 text-xs text-gray-500 font-medium'>Subject: <spn className='text-xs text-gray-500 font-medium'>{item.subject}</spn></h1>

            <div className='col-span-2 mt-2 text-xs text-gray-500 font-medium'>Topic: <spn>{item.topic}</spn></div>
            <div className='col-span-4 mt-2 text-xs text-gray-500 font-medium'>Date and Time: {item.scheduledUpTime} </div>
            <div className='col-span-3 mt-2 text-xs text-gray-500 font-medium'>End Time: <span>{item.scheduledEndTime}</span></div>
            </div>
          </div>
          <div className='col-span-3 bg-green-500 flex justify-center items-center rounded-lg text-white text-center'>
            <button>Join Now</button>
          </div>
          </div>  
      </div>
      
      ))}
      </>
      }
    </div>
      <div className='col-span-6 border-2 relative h-52 shadow-lg rounded-lg p-2 overflow-y-scroll'>
        No Session Scheduled
      </div>
      {/* Scheduled A Lecture Dialog*/}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Lecture Details"}
        </DialogTitle>
        <DialogContent>
          <div className="grid grid-cols-12 gap-6 w-[500px]">
          <div className="col-span-12">
              <TextField
              name="title"
              value={lecture['title']}
              onChange={onChange}
                id="outlined-basic"
                label="Title"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="col-span-6">
              <TextField
              name="subject"
              value={lecture['subject']}
              onChange={onChange}
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                fullWidth
              />
            </div>
      
            <div className="col-span-6">
              <TextField
              name="topic"
              value={lecture['topic']}
              onChange={onChange}
                id="outlined-basic"
                label="Topic"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="col-span-6">
              <TextField
              name="scheduledUpTime"
              value={lecture['scheduledUpTime']}
              onChange={onChange}
                id="datetime-local"
                label="Scheduled Time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                fullWidth
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="col-span-6">
              <TextField
              name="scheduledEndTime"
              value={lecture['scheduledEndTime']}
              onChange={onChange}
                id="time"
                label="Button Active for"
                type="time"
                defaultValue="07:30"
                fullWidth
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSchedule} color="primary">
            Schedule
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default StHome;
