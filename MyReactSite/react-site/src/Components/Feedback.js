import React, { Component } from 'react'
import axios from 'axios';
import './index.php'

const API_PATH = 'http://localhost:3000/react-site/src/Components/index.php';

export default class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fname: '',
          lname: '',
          email: '',
          message: '',
          mailSent: false,
          error: null
        }
      }

      handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: 'POST',
          url: `${API_PATH}`,
          data: this.state
        })
          .then(result => {
            this.setState({
              mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ error: error.message }));
      };

      
      
  render() {
    return (
        <div className="App">
        <p>Contact Me</p>
        <div style={{margin: 100}}>
        <form action="/index.php">
        <label>First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."
        value={this.state.fname}
        onChange={e => this.setState({ fname: e.target.value })}/>
    
    
        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="Your email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}/>
    
    
            <label>Message</label>
        <textarea id="message" name="message" placeholder="Write something.."
            onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}
        ></textarea>
        <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />

                    <div>
            {this.state.mailSent &&
                <div>Thank you for contcting us.</div>
            }
            </div>
        </form >
        </div>
        </div>
      );
    }
  }
