import { AppProps } from "next/app";

import "../src/scss/global.scss";
import "../src/scss/anims.scss";

const MyApp = ({ Component }: AppProps) => {
  return <Component />;
};

export default MyApp;
