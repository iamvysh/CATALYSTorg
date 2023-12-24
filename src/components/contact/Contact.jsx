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
          <div className="phone">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // height={"50px"}
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity }}
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.0315 12.4724C15.0205 16.4604 15.9254 11.8467 18.4653 14.3848C20.9138 16.8328 22.3222 17.3232 19.2188 20.4247C18.8302 20.737 16.3613 24.4943 7.68447 15.8197C-0.993406 7.144 2.76157 4.67244 3.07394 4.28395C6.18377 1.17385 6.66682 2.58938 9.11539 5.03733C11.6541 7.5765 7.04254 8.48441 11.0315 12.4724Z"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></motion.path>
          </svg>
          <p>+91 1234 56 78 91</p>
          </div>

          <div className="mail">
          <svg
            viewBox="0 0 24 24"
            // height={"50px"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
              <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:3,repeat:Infinity}}
                opacity="0.1"
                d="M3.09097 6.4173C3 6.76072 3 7.21507 3 7.99997V16C3 16.9319 3 17.3978 3.15224 17.7653C3.35523 18.2554 3.74458 18.6447 4.23463 18.8477C4.60218 19 5.06812 19 6 19H18C18.9319 19 19.3978 19 19.7654 18.8477C20.2554 18.6447 20.6448 18.2554 20.8478 17.7653C21 17.3978 21 16.9319 21 16V7.99997C21 7.21506 21 6.76072 20.909 6.4173C20.852 6.5418 20.7683 6.65652 20.6585 6.75255L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L3.3415 6.75255C3.23175 6.65652 3.14804 6.5418 3.09097 6.4173Z"
                fill="#323232"
              ></motion.path>{" "}
              <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:3,repeat:Infinity}}
                d="M3 8C3 7.06812 3 6.60218 3.15224 6.23463C3.35523 5.74458 3.74458 5.35523 4.23463 5.15224C4.60218 5 5.06812 5 6 5V5H18V5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V16C21 16.9319 21 17.3978 20.8478 17.7654C20.6448 18.2554 20.2554 18.6448 19.7654 18.8478C19.3978 19 18.9319 19 18 19V19H6V19C5.06812 19 4.60218 19 4.23463 18.8478C3.74458 18.6448 3.35523 18.2554 3.15224 17.7654C3 17.3978 3 16.9319 3 16V8Z"
                stroke="#323232"
                stroke-width="2"
                stroke-linejoin="round"
              ></motion.path>{" "}
              <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:3,repeat:Infinity}}
                d="M4 6L10.683 11.8476C11.437 12.5074 12.563 12.5074 13.317 11.8476L20 6"
                stroke="#323232"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></motion.path>{" "}
          </svg>
          <p>HR@CATALYST.COM</p>
          </div>
          <div className="address">
            <p>ADDRESS  :</p>
            <p className="addressLine">1234 WEB LANE <br/> Tech City, TC 54321 Digital Land</p>
          </div>
          <img src="/wave.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

// initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:3}}
