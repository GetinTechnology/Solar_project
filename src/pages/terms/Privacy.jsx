import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap'

function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className='terms'>
                     <div className='terms-banner'>
                     <h2>Privacy Policy
                     </h2>

            </div>
            <Container>
            <h2>Privacy Policy
            </h2>
            <p>At Getin Solar, we are committed to protecting your privacy and ensuring the security of any personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website, products, and services.</p>
                <div>
                    <h3>Information We Collect
                    </h3>
                    <p>We may collect the following types of information:

                    </p>
                    <ul>
                        <li>Personal Information: Name, email address, phone number, and other details you provide when filling out forms or contacting us.
                        </li>
                        <li>Usage Data: Information about how you interact with our website, including IP address, browser type, and pages visited.
                        </li>
                        <li>Cookies: Small data files used to improve your browsing experience.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>How We Use Your Information
                    </h3>
                    <p>Your information is used for the following purposes:

                    </p>
                    <ul>
                        <li>To provide, operate, and improve our services.
                        </li>
                        <li>To respond to your inquiries and communicate updates or offers.
                        </li>
                        <li>To personalize your experience on our website.
                        </li>
                        <li>To comply with legal obligations or protect our rights.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>
                        Data Sharing
                    </h3>
                    <p>We do not sell, trade, or rent your personal information to third parties. However, we may share data with trusted service providers or partners who assist in delivering our services, subject to strict confidentiality agreements.

                    </p>
                </div>
                <div>
                    <h3>Data Security
                    </h3>
                    <p>We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. However, no online system is entirely secure, and we cannot guarantee absolute security.

                    </p>
                </div>
                <div>
                    <h3>Your Rights
                    </h3>
                    <p>You have the right to:

                    </p>
                    <ul>
                        <li>Access and review the personal information we hold about you.
                        </li>
                        <li>Request corrections or updates to your data.
                        </li>
                        <li>Opt-out of marketing communications at any time.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Cookies and Tracking Technologies
                    </h3>
                    <p>Our website uses cookies to enhance your user experience. You can manage your cookie preferences through your browser settings, though disabling cookies may affect website functionality.</p>
                </div>
                <div>
                    <h3>Changes to This Policy
                    </h3>
                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and the effective date will be noted at the top of the policy.</p>
                </div>
                <div>
                    <h3>Contact Us
                    </h3>
                    <p>If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at:</p>
                    <p><b>Email:</b></p>
                    <p><b>Phone:</b></p>
                </div>
            </Container>
        </div>
    )
}

export default Privacy