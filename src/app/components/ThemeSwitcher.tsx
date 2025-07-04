import { useEffect, useState } from "react";
import { Switch } from "./Switch";
import { getDarkModeEnabled, setTheme } from "../services/ThemeHandler";

export default function ThemedSwitch() {

  const isDarkModeEnabled = getDarkModeEnabled();
  const [enabled, setEnabled] = useState(isDarkModeEnabled);

  useEffect(() => {
    setTheme();
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
