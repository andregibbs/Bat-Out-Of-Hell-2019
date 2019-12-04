import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const headData = {
    title: 'Cookie Policy | Bat of out Hell',
    description: '',
};

const Privacy = () => (
    <Layout
        headData={headData}
    >
        <section className="page PrivacyPage">
            <div className="PrivacyPage__content">
                <Container fluid={true} className="py-4">
                    <Container>
                        <h1 className="normal">Cookie Policy</h1>
                        <p>Updated: 05/18/2018</p>
                        <p>Information about our use of cookies.</p>
                        <p>This cookie policy applies to all websites, web properties (eg widgets and applications) and mobile applications (collectively the &ldquo;Site&rdquo;) which use cookies to distinguish you from other users of our Site. This helps us to provide you with a good experience when you browse our Site and also allows us to improve our Site. By continuing to browse the Site, you are agreeing to our use of cookies.</p>
                        <p>A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer&rsquo;s hard drive.</p>
                        <p>We use the following cookies:</p>
                        <p><strong>Strictly necessary cookies.</strong>&nbsp;These are cookies that are required for the operation of our Site. They include, for example, cookies that enable you to log into secure areas of our Site, use a shopping cart or make use of e-billing services.</p>
                        <p><strong>Analytical/performance cookies.</strong>&nbsp;They allow us to recognize and count the number of visitors and to see how visitors move around our Site when they are using it. This helps us to improve the way our Site works, for example, by ensuring that users are finding what they are looking for easily.</p>
                        <p><strong>Functionality cookies.</strong>&nbsp;These are used to recognize you when you return to our Site. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).</p>
                        <p><strong>Targeting cookies.</strong>&nbsp;These cookies record your visit to our Site, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.</p>
                        <p>Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies.</p>
                        <p>In addition, on occasion our Site may also set a &ldquo;session cookie&rdquo; which helps us administer the Site. The session cookie expires when you close your browser and does not retain any information about you after it expires.</p>
                        <p>If you do not want information collected through the use of cookies, you should be able to modify your browser preference to provide you with choices relating to cookies. For example, if you use a standard browser, you should have the choice to accept all cookies, to be notified when a cookie is set or to reject all cookies. If you choose to reject cookies, you may be unable to use certain Site services (e.g., those services that require you to log on to the Site in order to participate). For more information on modifying your browser preference, please refer to the documentation accompanying your browser.</p>

                        <Link to="/">Back to home</Link>
                    </Container>
                </Container>
            </div>
        </section>
    </Layout>
)

export default Privacy
