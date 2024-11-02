export const Service = ({ icon, title }) => {
  return (
    <div className="service-container">
      <img src={icon} className="service-icon" />
      <p> {title}</p>
    </div>
  );
};
