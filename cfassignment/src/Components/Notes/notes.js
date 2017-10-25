import React, {Component} from 'react'
import FaTrashO from 'react-icons/lib/fa/trash-o'
const styles = {
    height: "100px",
    border: "none",
    borderColor: "#E8E8E8",
    borderBottomStyle: "solid",
    backgroundColor: "white"
}
const taskStyle = {
    paddingLeft: "10px",
    paddingTop: "10px",
    color: "grey"
}
const trashStyle = {
    position: "absolute",
    top: "30px",
    right: "10px",
    color: "grey"

}
class Note extends Component{

    constructor(props){
        super(props)
    }
    render(){
        const data = this.props.tasks
        const taskList = Object.keys(data).map((task,index)=>{
            return( <div style={styles}>
                <p style={taskStyle} key={index}>{task}</p>
                <FaTrashO style={trashStyle}/>
            </div>)
        })
        return(
            <div>
                {taskList}
            </div>
        )
    }

}
export default Note