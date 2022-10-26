import github from "./img/Github_logo.jpeg";
import Instagram from "./img/Instagram_logo.jpeg";
import LinkedIn from "./img/linkedin_logo.jpeg";
import Twitter from "./img/Twitter_logo.jpeg";

export default function Contact_Us() {
  return (
    <>
    <div className="contact">
      <h1 className="heading">Contact Me</h1>

      <form>
        <div className="form">
            <input
              type="text"
              className="form_text"
              placeholder="Name"
            />
          <input
            type="email"
            className="form_text"
            placeholder="Email"
          />
       
          <textarea
            name=""
            id=""
            rows="10"
            cols= "30"
            placeholder="Message"
          ></textarea>
        <button type="submit">send</button>
        </div>
      </form>

      <div className="social-icon">
        <a href="/">
          <img src={github} alt="icon"  />
        </a>
        <a href="/">
          <img src={Instagram} alt="icon"  />
        </a>
        <a href="/">
          <img src={LinkedIn} alt="icon"  />
        </a>
        <a href="/">
          <img src={Twitter} alt="icon"  />
        </a>
      </div>
      </div>
    </>
  );
}

