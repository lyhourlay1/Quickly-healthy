const Splash = () => {
  return (
    <div className="splash-container">
      <div className="splash-component-1">
        <div className="splah-text">find doctors near you</div>
        <img src={SPLASH_COMPONENT_1} />
      </div>

      <div className="splash-component-2">
        <div className="splash-text">schedule appointments</div>
        <img src={SPLASH_COMPONENT_2} />
      </div>

      <div className="splash-component-3">
        <div className="splash-text">confirm if your insurance is accepted by a particular provider</div>
        <img src={SPLASH_COMPONENT_3} />
      </div>

      <div className="splash-component-4">
        <div className="splash-text">upload health records for easy provider access</div>
        <img src={SPLASH_COMPONENT_4} />
      </div>
    </div>
  );
}