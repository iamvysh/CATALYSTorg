import "./weDo.scss";

const Wedo = () => {
  return (
    <div className="wedo">
      <h1>WHAT WE OFFER</h1>
      <p>
        Catalyst is an agile and proactive development services provider
        creating new digital experiences for your end users with intelligent
        solutions. We use intelligent practices, advanced technologies, and
        adaptive systems for your development solutions.
      </p>
      <div className="circlewrapper">
        <div className="image1">
          <img src="/settings1.png" alt="" />
          <p>IT MANAGEMENT</p>
        </div>
        <div className="image2">
          <img src="/phone1.png" alt="" />
          <p>APP DEVELOPEMENT</p>
        </div>
        <div className="image3">
          <img src="/cyber security 1.png" alt="" />
          <p>CYBER SECURITY</p>

        </div>
        <div className="image4">
          <img src="/cloud 1.png" alt="" />
          <p>CLOUD COMPUTING</p>
        </div>
        <div className="image5">
          <img src="/web 2.png" alt="" />
          <p>WEB DEVELOPEMENT</p>

        </div>
      </div>
    </div>
  );
};

export default Wedo;
