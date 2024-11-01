export const SocialRatingIcons = ({ logo, icon, rating, title }) => {
  return (
    <div className="social-rating-div">
      <div className="social-rating-inner-div">
        <img className="rating-logo" src={logo} />
        <div className="ratings">
          <div className="d-flex align-items-center gap-1">
            <img src={icon} />
            <p className=""> {rating}</p>
          </div>
          <p className=""> {title}</p>
        </div>
      </div>
    </div>
  );
};
