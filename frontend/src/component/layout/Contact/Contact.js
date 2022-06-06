import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=recoverymail7510@gmail.com<&su=Subject&body=Body%20Text">
        <Button>Click Here to Send Mail : <strong>recoverymail7510@gmail.com</strong> </Button>
      </a>
    </div>
  );
};

export default Contact;
