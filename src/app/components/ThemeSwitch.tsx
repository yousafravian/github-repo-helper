import { useEffect, useState } from "react";
import {Switch} from "./Switch";

export default function ThemedSwitch() {
  function getDarkModeEnabled() {
    return JSON.parse(localStorage.getItem("DARKMODE") ?? "false");
  }

  const isDarkModeEnabled = getDarkModeEnabled();
  const [enabled, setEnabled] = useState(isDarkModeEnabled);

  useEffect(() => {
    if (enabled) {
      document.body.classList.add("dark");
      localStorage.setItem("DARKMODE", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.removeItem("DARKMODE");
    }
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onClick={() => setEnabled((prev: boolean) => !prev)}
      className="dark:bg-gray-300/10"
    >

    </Switch>
  );
}
