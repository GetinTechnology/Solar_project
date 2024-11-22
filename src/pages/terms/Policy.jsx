
import { Container } from 'react-bootstrap'
import '../../App.css'
import { useEffect } from 'react'

function Policy() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className='terms'>
            <div className='terms-banner'>
            <h2>Terms and Conditions</h2>

            </div>
            <Container>
            <h2>Solar Policy Terms and Conditions</h2>

                <p>Welcome to Getin Solar. Please review the following terms and conditions that govern your use of our services and ensure a clear understanding of our policies related to solar installations and services. By engaging with our services, you agree to comply with these terms.</p>
                <div>
                    <h3>Agreement to Terms
                    </h3>
                    <p>These terms and conditions constitute a legally binding agreement between you (the customer) and Getin Solar. By proceeding with any solar installation or service, you acknowledge and accept these terms.

                    </p>
                </div>
                <div>
                    <h3>Eligibility for Installation
                    </h3>
                    <ul>
                        <li>Property must meet structural and electrical safety standards for solar installation.
                        </li>
                        <li>Adequate sunlight exposure and roof condition are required to maximize efficiency.
                        </li>
                        <li>All required permits and approvals must be obtained before the commencement of installation.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Quotation and Pricing
                    </h3>
                    <ul>
                        <li>All quotes are valid for 30 days from the date of issuance.
                        </li>
                        <li>Prices are subject to changes due to market fluctuations in material costs or government policies.
                        </li>
                        <li>Additional costs may apply for modifications required for installation or unexpected site conditions.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Subsidy and Incentives
                    </h3>
                    <p>We assist customers in applying for available government subsidies and tax incentives. However, approval of these benefits is solely determined by the respective regulatory authorities, and eligibility criteria must be met.</p>
                </div>
                <div>
                    <h3>Warranties and Maintenance
                    </h3>
                    <p>Our installations come with a warranty to ensure peace of mind. To maintain this warranty, customers must adhere to recommended cleaning and maintenance schedules. Proper upkeep ensures the system’s efficiency and longevity.</p>
                </div>
                <div>
                    <h3>Cancellations and Refunds
                    </h3>
                    <p>Cancellations are permitted but may involve charges for work already completed or materials procured. Refunds, where applicable, will be processed in accordance with the terms of your agreement.</p>
                </div>
                <div>
                    <h3>Privacy</h3>
                    <p>We are committed to protecting your personal information. Any data collected during the installation process or service interactions is used strictly to improve our offerings and is safeguarded under our privacy policies.</p>
                </div>
                <div>
                    <h3>Dispute Resolution
                    </h3>
                    <p>In the unlikely event of a dispute, we encourage resolution through open communication. If necessary, disputes may be resolved through arbitration or legal channels, as specified in your agreement.</p>
                    <p>By understanding and adhering to these terms, you help us provide seamless solar energy solutions while contributing to a greener future. For any questions, contact us at enquiry@getintech.in or +91 89258 31826.</p>
                </div>
            </Container>

        </div>
    )
}

export default Policy