import type { BaganTheme } from "@bagandev/types";
import { baganAlerts } from "bagan-alerts";

const baganMinima: BaganTheme = {
  name: "@bagandev/minima",
  version: "0.1.1",
  plugins: [baganAlerts],
};

export { baganMinima };
