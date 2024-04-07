import tailwindConfig from "@openstarter/tailwind-config";
import { Config } from "tailwindcss";

const config: Config = {
  presets: [tailwindConfig],
  content: [...tailwindConfig.content],
};

export default config;
