import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardWithHeader from "../src/components/cards";
//https://github.com/abdulwaqar844/send-email-with-reactjs-and-emailjs
function App() {
  init("user_aVMjgLam4rroy8ETgabF9");
  const form = useRef();
  // let q1 = "";
  // let q1name = "";
  // let q2 = "";
  // let q2name = "";
  // let q3 = "";
  // let q3name = "";
  // let q4 = "";
  // let q4name = "";
  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs
      .sendForm(
        "service_03k440o",
        "template_ymy3mpi",
        form.current,
        "ZKFMughkI-DFVOiem"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} ref={form}>
        <h1 className='text-center'>Learner Progress</h1>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='First Name'>First Name</label>
            <input type='text' className='form-control' name='firstname' />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='Last Name'>Last Name</label>
            <input type='text' className='form-control' name='lastname' />
          </div>

          <CardWithHeader
            bgcolor='#fbe5d6'
            sectiontitle={"Taha Tinana-Physical well-being"}
            q1={"How does your body feel, moves, and grows?"}
            q1name={"q1bodyfeelmessage"}
            q2={"What do you do to take care of your body?"}
            q2name={"q2bodycaremessage"}
            q3={"What do you need to help you? / How can you be supported?"}
            q3name={"q3bodyhelpmessage"}
          ></CardWithHeader>

          <CardWithHeader
            bgcolor='#e2f0d9'
            sectiontitle={"Taha hinengaro (mental and emotional wellbeing)"}
            q1={
              "How you feel in your mind, heart and conscience thoughts (Stressed, anxious, worried, unsure, over excited, unfocused, hungry, physically not well.)"
            }
            q1name={"q1emotionalfeelmessage"}
            q2={"What do you need to help you? / How can you be supported?"}
            q2name={"q2emotionalhelpmessage"}
          ></CardWithHeader>

          <CardWithHeader
            bgcolor='#fdcff4'
            sectiontitle={"Taha whānau (family and social health)"}
            q1={"Who gives you strength, support, security & identity?"}
            q1name={"q1familyhelpmessage"}
            q2={"Who do you have to support you? Who can you talk to?"}
            q2name={"q2familyhelpmessage"}
            q3={"Who do you need to help you? / How can you be supported?"}
            q3name={"q3familyhelpmessage"}
          ></CardWithHeader>

          <CardWithHeader
            bgcolor='#fff2cc'
            sectiontitle={"Taha wairua (spiritual wellbeing and sense of self)"}
            q1={"What do you believe / hold close to you?"}
            q1name={"q1spiritualmessage"}
            q2={
              "What is important in your life?(Family, Friends, Religion, Beliefs and Traditions)"
            }
            q2name={"q2spiritualmessage"}
            q3={"Who do you need to help you? / How can you be supported?"}
            q3name={"q3spiritualmessage"}
          ></CardWithHeader>

          <div className='form-group col-md-6'>
            <label htmlFor='message'>message</label>
            <textarea
              type='text'
              className='form-control'
              id='inputmessage4'
              name='user_message'
            />
          </div>
        </div>

        <button type='submit' className='btn btn-primary'>
          Send Your Journey
        </button>
      </form>
    </div>
  );
}

export default App;
