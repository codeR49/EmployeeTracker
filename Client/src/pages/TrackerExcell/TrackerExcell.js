import React, { Component } from 'react';
import DevelopmentUrl from "../../data/api";


// import {OutTable, ExcelRenderer} from 'react-excel-renderer';
// import {  Col, Input, InputGroup, FormGroup, Label, Button, Fade, FormFeedback, Container, Card } from 'reactstrap';


 import "../EmployeeList/EmployeeList.css"
 
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

class TrackerExcell extends React.Component {
  state = {
    fileList: [],
    uploading: false,
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('file', file);
    });
    this.setState({
      uploading: true,
    });
    // You can use any AJAX library you like
    fetch(DevelopmentUrl + '/exceldata', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          fileList: [],
        });
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        this.setState({
          uploading: false,
        });
      });
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </>
    );
  }
}
//  class TrackerExcell extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       isOpen: false,
//       dataLoaded: false,
//       isFormInvalid: false,
//       rows: null,
//       cols: null
//     }
//     this.fileHandler = this.fileHandler.bind(this);
//     this.toggle = this.toggle.bind(this);
//     this.openFileBrowser = this.openFileBrowser.bind(this);
//     this.renderFile = this.renderFile.bind(this);
//     this.openNewPage = this.openNewPage.bind(this);
//     this.fileInput = React.createRef();
//   }

//   renderFile = (fileObj) => {
//       //just pass the fileObj as parameter
//       ExcelRenderer(fileObj, (err, resp) => {
//         if(err){
//           console.log(err);            
//         }
//         else{
//           this.setState({
//             dataLoaded: true,
//             cols: resp.cols,
//             rows: resp.rows
//           });
//         }
//       }); 
//   }

//   fileHandler = (event) => {    
//     if(event.target.files.length){
//       let fileObj = event.target.files[0];
//       let fileName = fileObj.name;

      
//       //check for file extension and pass only if it is .xlsx and display error message otherwise
//       if(fileName.slice(fileName.lastIndexOf('.')+1) === "xlsx"){
//         this.setState({
//           uploadedFileName: fileName,
//           isFormInvalid: false
//         });
//         this.renderFile(fileObj)
//       }    
//       else{
//         this.setState({
//           isFormInvalid: true,
//           uploadedFileName: ""
//         })
//       }
//     }               
//   }

//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }

//   openFileBrowser = () => {
//     this.fileInput.current.click();
//   }

//   openNewPage = (chosenItem) => {
//     const url = chosenItem === "github" ? "https://github.com/ashishd751/react-excel-renderer" : "https://medium.com/@ashishd751/render-and-display-excel-sheets-on-webpage-using-react-js-af785a5db6a7";
//     window.open(url, '_blank');
//   }

//   render() {
//     return (
//       <div>
      
//         <Container>
//         <form className='userList'>
//           <FormGroup row>
//             <Label for="exampleFile" xs={6} sm={4} lg={2} size="lg">Upload</Label>          
//             <Col xs={4} sm={8} lg={10}>                                                     
//               <InputGroup>
               
//                   <Button color="info" style={{color: "white", zIndex: 0}} onClick={this.openFileBrowser.bind(this)}><i className="cui-file"></i> Browse&hellip;</Button>
//                   <input type="file" hidden onChange={this.fileHandler.bind(this)} ref={this.fileInput} onClick={(event)=> { event.target.value = null }} style={{"padding":"10px"}} />                                
              
//                 <Input type="text" className="form-control" value={this.state.uploadedFileName} readOnly invalid={this.state.isFormInvalid} />                                              
//                 <FormFeedback>    
//                   <Fade in={this.state.isFormInvalid} tag="h6" style={{fontStyle: "italic"}}>
//                     Please select a .xlsx file only !
//                   </Fade>                                                                
//                 </FormFeedback>
//               </InputGroup>     
//             </Col>                                                   
//           </FormGroup> 
//           <button type="submit" className="newUserButton" >Upload</button>
       
//         </form>

//         {this.state.dataLoaded && 
//         <div>
//           <Card body outline color="secondary" className="restrict-card">
            
//               <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
            
//           </Card>  
//         </div>}
//         </Container>
//       </div>
//     );
//   }
// }
export default TrackerExcell;
//export default TrackerExcell;