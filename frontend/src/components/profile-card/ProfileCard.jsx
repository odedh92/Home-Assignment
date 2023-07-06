import LOGO from "../../assets/Logo.png";
import "./profile-card.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function ProfileCard({ profile }) {
  let memberSince = profile.member_since
  const memberSinceDate = new Date(memberSince * 1000);
  const formattedMemberSince = memberSinceDate.toLocaleDateString('en-US');
  return (
    <div className="profile-card-container">
      <Header />
      <div className="profile-card">
        <div className="leftContent">
          <img src={profile.profile} alt="" className="profileImg" />
          <article className="details teamAndLogo">
            <img src={LOGO} alt="" />
            <div className="teamSection">
              <h5>Team</h5>
              <h2>{profile.team}</h2>
            </div>
          </article>
          <div className="details-bot">
            <article className="details">
              <h5>Role in the team</h5>
              <h2>{profile.role}</h2>
            </article>
            <article className="details">
              <h5>Deapartment Or company</h5>
              <h3>{profile.department}</h3>
            </article>
            <article className="details">
              <h5>Location</h5>
              <h3>{profile.location}</h3>
            </article>
          </div>
        </div>
        <div className="rightContent">
          <h1>{profile.fullname}</h1>
          <div className="gridData">
            <div className="col">
              <article>
                <h4>[team] member since</h4>
                <p>{formattedMemberSince ?? '/'}</p>
              </article>
              <article>
                <h4>Working in [company] since</h4>
                <p>{profile.working_since ?? '/'}</p>
              </article>
              <article>
                <h4>Favorite [thing]</h4>
                <p>{profile.favorite ?? '/'}</p>
              </article>
            </div>
            <div className="col">
              <article>
                <h4>My superpower</h4>
                <p>{profile.superpower ?? '/'}</p>
              </article>
              <article>
                <h4>I want to be good at</h4>
                <p>{profile.good_at ?? '/'}</p>
              </article>
              <article>
                <h4>Favorite thing to do at work</h4>
                <p>{profile.fav ?? '/'}</p>
              </article>
            </div>
            <div className="col">
              <article>
                <h4>Background / experience</h4>
                <p>{profile.background ?? '/'}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
