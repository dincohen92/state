import Header from './components/Header';

function About() {
  return (
    <div className="about-page">
      <Header/>
      <h1>ABOUT US</h1>
      <h3>Our Story</h3>
      <p>STATE was founded in 2024 to help the growing community of designers develope skills and contribute to meaningful projects</p>
      <h3>Our Mission</h3>
      <p>STATE aims to build an inclusive community where aspiring designers collaborate, learn, and grow.
        By providing mentorship, resources, and opportunities to work on real-world projects, STATE empowers designers to develop their skills, create meaningful work, and build professional portfolio-worthy products.
        Our mission is to foster innovation, creativity, and professional development while contributing to the new generation of designers.</p>
      <h3>Our Goals</h3>
      <lu>
        <li>
          <b>Establish a Hybrid Platform</b> | Build both online and offline spaces where designers across various fields (industrial, graphic, product, etc.) can collaborate, share ideas, and work on real-world projects.
        </li>
        <li>
          <b>Mentorship and Education</b> | Provide a mentorship program, a comprehensive resource library, and collaborate with industry professionals to ensure designers continue to grow both creatively and professionally.
        </li>
        <li>
          <b>Portfolio Development</b> | Enable designers to work on portfolio-worthy projects, contributing to real-world products as material for future job opportunities.
        </li>
        <li>
          <b>Sustainable Funding</b> | Develop a non-profit income stream to sustain the community, grow resources, and support new projects.
        </li>
      </lu>
    </div>
  );
}

export default About;