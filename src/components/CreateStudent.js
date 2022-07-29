import React,{useState}  from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom';
import {url} from '../App'
import axios from 'axios'

function CreateStudent() {

  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [mobile,setMobile] = useState("");
  let [batch,setBatch] = useState("");
  let navigate = useNavigate();

    let handleSubmit = async ()=>{
      let data = {
        name,
        email,
        mobile,
        batch
      }
     
      let res = await axios.post(url,data);

      //Just to jump to different route
      if(res.status===201)
        navigate('/view-student')
  }
  return <>
    <div>
    <div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
     New User Created
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
    <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Mobile" onChange={(e)=>{
          setMobile(e.target.value)
        }}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Batch </Form.Label>
        <Form.Control type="text" placeholder="Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
</Form>
 </div>
  </>
}

export default CreateStudent