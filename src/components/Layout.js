import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import SEO from './seo'
import CookieConsent from "react-cookie-consent";
import 'stylesheets/main.scss';

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };
    }

    render() {
        const {children, headData, displayLogo,} = this.props;

        return (
            <>
              <CookieConsent
                    location="bottom"
                    disableStyles={true}
                    buttonText="Accept cookies"
                    cookieName="bcookie"
                    containerClasses="cookie"
                    contentClasses="cookieContent"
                    buttonClasses="btn btn--red"
                    expires={150}
                >
                    <p className="text--basic">We use cookies to help make this website better. For more information on cookies and how we use
                        them, please see our <Link className="text--white" to="/cookie-policy/">cookies page</Link>.<br/>
                        Otherwise, we’ll assume you’re OK to continue.</p>
                </CookieConsent>
                <SEO
                    title={headData.title}
                    description={headData.description}
                />

                <noscript className="no-js">Javascript is required to view the full experience of this site.</noscript>

                <div className="outdated-browser" id="outdated-browser"></div>

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                function get_browser() {
                  var ua = navigator.userAgent || navigator.vendor || window.opera, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\\/))\\/?\\s*(\\d+)/i) || [];
                  if (/trident/i.test(M[1])) {
                    tem = /\\brv[ :]+(\\d+)/g.exec(ua) || [];
                    return { name: 'IE', version: (tem[1] || '') };
                  }
                  if (M[1] === 'Chrome') {
                    tem = ua.match(/\\bOPR\\/(\\d+)/)
                    if (tem != null) { return { name: 'Opera', version: tem[1] }; }
                  }
                  if (window.navigator.userAgent.indexOf("Edge") > -1) {
                    tem = ua.match(/\\Edge\\/(\\d+)/)
                    if (tem != null) { return { name: 'Edge', version: tem[1] }; }
                  }
                  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
                  if ((tem = ua.match(/version\\/(\\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
                  return {
                    name: M[0],
                    version: +M[1]
                  };
                }

                var browser = get_browser()

                function isSupported(browser) {
                  var supported = false;
                  if (browser.name === "Chrome" && browser.version > 38) {
                    supported = true;
                  } else if ((browser.name === "MSIE" || browser.name === "IE") && browser.version > 10) {
                    supported = true;
                  } else if (browser.name === "Firefox" || browser.name === "Edge" || browser.name === "Opera" || browser.name === "Safari") {
                    supported = true;
                  }
                  return supported;
                }

                function isFacebookOrInstagramApp() {
                    var ua = navigator.userAgent || navigator.vendor || window.opera;
                    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1 || ua.indexOf('Instagram') > -1 || ua.indexOf('Twitter') > -1);
                }

                var isSupported = isSupported(browser);

                if (isFacebookOrInstagramApp()) {
                    isSupported = true;
                }

                if (browser.name === "IE") {
                    document.body.className += 'ie';
                }

                if (!isSupported) {
                setTimeout(function(){
                document.getElementById("outdated-browser").innerHTML = '<p>You are using an outdated browser.<br/> <a href="http://outdatedbrowser.com" class="link" target="_blank" rel="noreferrer noopener">More information</a></p>';
                 }, 1500);
                }
                `,
                    }}
                />
                <Header displayLogo={displayLogo}/>

                {children}
                <Footer/>


            </>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};


Layout.defaultProps = {
    headData: {
        title: '',
        description: '',
    },
    headerImage: false,
    headerClasses: false,
    display: false,
};

export default Layout
