import "./Contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact">
      <h1>
        GET IN <span>TOUCH</span>
      </h1>
      <div className="contactwrapper">
        <div className="inputwrapper">
          <input type="text" placeholder="email..." />
          <input type="text" placeholder="name..." />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="message..."
          ></textarea>
          <button>SUBMIT</button>
        </div>
        <div className="details">
        </div>
      </div>
    </div>
  );
};

export default Contact;
