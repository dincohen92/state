import Header from "./components/Header";

function Contact() {
  return (
    <div className="contact-page">
      <Header/>
      <h1>CONTACT US</h1>
      <div>
        <p>Have any inquiries or want to join the team?<br/>
        Send us a message at <a href="mailto:statedesigncollective@gmail.com">statedesigncollective@gmail.com</a><br/>
        We would love to hear from you!</p>
      </div>
    </div>
  );
}

export default Contact;
