import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { AppPostHogProvider } from "~/components/_analytics/provider";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AppPostHogProvider>
      <div className={GeistSans.className}>
        <Component {...pageProps} />
      </div>
    </AppPostHogProvider>
  );
};

export default api.withTRPC(MyApp);
