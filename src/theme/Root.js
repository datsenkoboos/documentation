import React from "react";
import { CookieConsent } from "@site/src/features/cookie-consent";
import { DevTools, devToolsModel } from "@site/src/features/devtools";

// Default implementation, that you can customize
// https://docusaurus.io/docs/using-themes#wrapper-your-site-with-root

function Root({ children }) {
    const switchColor = devToolsModel.color.useSwitch();
    const switchLogo = devToolsModel.logo.useSwitch();

    return (
        <div data-theme={switchColor.color} data-logo={switchLogo.logo}>
            {children}
            {/* NOTE: exp with HotJar feedback widget (FEEDBACK-325)  */}
            {/* <Feedback /> */}
            <CookieConsent />
            <DevTools color={switchColor} logo={switchLogo} />
        </div>
    );
}

export default Root;
