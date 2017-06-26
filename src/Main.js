import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <section id="two">
        <h2>All about me</h2>
        <div className="row">
          <article className="6u 12u$(xsmall) work-item">
            <a href="images/fulls/family.jpg" className="image fit thumb"><img src="images/thumbs/family.jpg" alt="" /></a>
            <h3>This is me</h3>
            <p>The things I enjoy in life</p>
          </article>
          <article className="6u$ 12u$(xsmall) work-item">
            <a href="images/fulls/skills.jpg" className="image fit thumb"><img src="images/thumbs/skills.jpg" alt="" /></a>
            <h3>Resume</h3>
            <p>My professional life outlined</p>
          </article>
          <article className="6u 12u$(xsmall) work-item">
            <a href="images/fulls/portfolio-pic.jpg" className="image fit thumb"><img src="images/thumbs/portfolio-pic.jpg" alt="" /></a>
            <h3>Portfolio</h3>
            <p>Proving my salt</p>
          </article>
          <article className="6u$ 12u$(xsmall) work-item">
            <a href="images/fulls/cert.jpg" className="image fit thumb"><img src="images/thumbs/cert.jpg" alt="" /></a>
            <h3>Certifications</h3>
            <p>Showcasing my professional development</p>
          </article>
          {/*<article className="6u 12u$(xsmall) work-item">*/}
          {/*<a href="images/fulls/05.jpg" className="image fit thumb"><img src="images/thumbs/05.jpg" alt="" /></a>*/}
          {/*<h3>Nunc enim commodo aliquet</h3>*/}
          {/*<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>*/}
          {/*</article>*/}
          {/*<article className="6u$ 12u$(xsmall) work-item">*/}
          {/*<a href="images/fulls/06.jpg" className="image fit thumb"><img src="images/thumbs/06.jpg" alt="" /></a>*/}
          {/*<h3>Risus ornare lacinia</h3>*/}
          {/*<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>*/}
          {/*</article>*/}
        </div>
        {/*<ul className="actions">*/}
        {/*<li><a href="#" className="button">Full Portfolio</a></li>*/}
        {/*</ul>*/}
      </section>
    );
  }
}

export default Main;