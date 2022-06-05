// 1. Durch Klick auf den Button soll zwischen Sonne und Mond umgeschaltet werden ("🌞" und "🌝"), aria-label soll zwischen Sonne und Mond wechseln.

// 2. Der Text im Button soll zwischen "Hell" und "Dunkel" wechseln, je nachdem, was der Klick auslöst.

// 3. Zusätzlich soll im Seitentitel auch immer passend "Hell" oder "Dunkel" stehen.

import { useState } from "react";

export default function LightSwitch() {
  const [isLight, setIsLight] = useState(true);

  return (
    <div className="light-switch">
      <span
        className="light-switch__icon"
        aria-label={isLight ? "Sonne" : "Mond"}
        role="img"
      >
        {isLight ? "☀️" : "🌑"}
      </span>
      <button
        onClick={() => setIsLight((currentLight) => !currentLight)}
        className="light-switch__button"
      >
        {isLight ? "Dunkel" : "Hell"}
      </button>
    </div>
  );
}
