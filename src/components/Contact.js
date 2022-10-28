import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <h1 className="heading">Contact Me</h1>
        <div className="animationArea">
          <ul className="box-area">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="contactCard  ">
          <form>
            <div className="form">
              <input type="text" className="form_text" placeholder="Name" />
              <input type="email" className="form_text" placeholder="Email" />

              <textarea
                name=""
                id=""
                rows="10"
                cols="30"
                placeholder="Message"
              ></textarea>
              <button type="submit">send</button>
            </div>
          </form>
        </div>

        <div className="social-icon">
          <a href="/">
            <GitHubIcon sx={{ fontSize: "50px" }} />
          </a>
          <a href="/">
            <InstagramIcon sx={{ fontSize: "50px" }} />
          </a>
          <a href="/">
            <LinkedInIcon sx={{ fontSize: "50px" }} />
          </a>
          <a href="/">
            <TwitterIcon sx={{ fontSize: "50px" }} />
          </a>
        </div>
      </div>
    </>
  );
}
