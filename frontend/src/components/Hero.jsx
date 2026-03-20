import { ArrowRight, Wrench, UserCircle } from 'lucide-react';
import './Hero.css';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

export function Hero() {
  return (
    <div className="hero-container">
      <img src={img1} className="corner-img corner-top-left" alt="" />
      <img src={img2} className="corner-img corner-top-right" alt="" />
      <img src={img3} className="corner-img corner-bottom-left" alt="" />
      <img src={img4} className="corner-img corner-bottom-right" alt="" />

      <div className="badge-container">
        <div className="badge">
          <Wrench className="badge-icon" />
          <span className="badge-text">Built for Gig Workers</span>
        </div>
      </div>

      <div className="heading-container">
        <h1 className="hero-heading">
          AI-Powered <span className="gradient-text">Income Protection</span>
          <br />
          For Gig Workers, At Scale.
        </h1>
      </div>

      <p className="subtitle">
        Insurance that works as fast as you do.
      </p>

      <div className="cta-container">
        <button className="btn btn-primary">
  {/* Arrow entering from left on hover */}
  <span className="btn-arrow-enter">
    <ArrowRight className="btn-icon" />
  </span>

  {/* Text + arrow that exits to the right on hover */}
  <span className="btn-arrow-wrap">
    <span className="btn-arrow-exit">
      <ArrowRight className="btn-icon" />
    </span>
    Get Protected
  </span>
</button>
        <button className="btn btn-secondary">
          <UserCircle className="btn-icon icon-light" />
          Create Account
        </button>
      </div>
    </div>
  );
}