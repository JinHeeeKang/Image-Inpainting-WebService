import React from "react";

// reactstrap components
// import { Container, Button, Input, Label } from "reactstrap";
import {useLocation} from "react-router-dom";


function test(props){

  console.log(props)
  console.log(this.props.location.message)

  // const location = useLocation();
  // const message = location.state.message;

  // return(
    
  //   <div>
  //     <button>{message}</button>
  //   </div>

  // );

}


export default test;










// class InsertTest extends React.Component {



//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       content: "",
//     };
//     this.eventTest = this.eventTest.bind(this);
//     this.onChange = this.onChange.bind(this);
//   }

//   onChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }

//   eventTest(e) {
//     e.preventDefault();

//     const post = {
//       name: this.state.name,
//       content: this.state.content,
//     };

//     fetch("http://localhost:7777/add", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(post),
//     });
//   }

//   render() {
//     const { name, content } = this.state;
//     const { eventTest, onChange } = this;

    
//     // const message = this.props.location.state.message;
//     return (
//       <>
//         <Container>
//           <div>
//             <h4>insert Test</h4>
//             <form onSubmit={eventTest}>
//               <div>
//                 <Label>name:</Label>
//                 <Input
//                   type="text"
//                   name="name"
//                   value={name}
//                   onChange={onChange}
//                 />
//               </div>
//               <div>
//                 <Label>content:</Label>
//                 <Input
//                   type="text"
//                   name="content"
//                   value={content}
//                   onChange={onChange}
//                 />
//               </div>
//               <div>
//                 <Button type="submit">전송</Button>
//               </div>
//             </form>
//           </div>
//         </Container>
//       </>
//     );
//   }
// }

// export default InsertTest;
