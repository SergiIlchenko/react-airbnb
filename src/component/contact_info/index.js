import "./index.css";

export default function ContactInfo({
  name,
  src,
  responseRate,
  responseTime,
  info,
  phone,
}) {
  return (
    <div className="content__block">
      <div className="content__header">
        <img src={src} alt="avatar" className="avatar" />

        <div className="content__info">
          <h1 className="contact__text">Господар - {name}</h1>

          <div className="contact__sub-block">
            <span className="contact__sub-value">{phone}</span>

            <span className="contact__sub-value">{responseTime}</span>

            <span className="contact__sub-value">
              {responseRate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <span>{info}</span>
    </div>
  );
}
