import HeroSection from '@/components/shared/heroSection/HeroSection'
import React from 'react'

function Index() {
  return (
    <>
      <HeroSection/>
      <div className="container py-5">
        <main>
          <section id="introduction">
              <h2 className='text-muted'>Introduction</h2>
              <p className='text-muted'>NextCTL values the privacy and security of the information you share with us through our website. It is important to understand how we collect, use, and maintain your information. This Privacy Policy deals with personally identifiable information (referred to as {`"`}Data{`"`} below) that may be collected by us on our site.</p>
              <p className='text-muted'>By submitting personally identifiable information on NextCTL, you agree to the terms of this privacy policy and explicitly consent to the collection and use of your personally identifiable information in accordance with this privacy policy.</p>
              <p className='text-muted'>This Privacy Policy does not apply to other entities that we do not own or control or persons who are not our employees, agents, or within our control. Please take the time to read our Terms.</p>
          </section>

          <section id="data-types">
              <h2 className='text-muted'>What Types of Data We Collect</h2>
              <p className='text-muted'><strong>Personal Information:</strong> Personal information includes your name, address, email address, telephone number, account username, password, credit/debit card numbers, billing addresses (Note: We don{`'`}t store credit card data; it works via a third party) and expiration dates, account numbers, as well as other similar information. Such information is only collected from you if you voluntarily submit it to us. Sometimes, we also collect non-personal information like demographic information, user IP addresses, browser types, and other anonymous statistical information related to the use of the NextCTL website.</p>
          </section>

          <section id="data-access">
              <h2 className='text-muted'>Who Has Access to Your Data</h2>
              <p className='text-muted'>We do not share your personal data with any third-party in a way that reveals your personal information like email, name, etc. Only NextCTL website administrators have access to this data. However, you can review, update, and delete your data anytime at your discretion.</p>
          </section>

          {/* <!-- Continue adding sections as per your Privacy Policy --> */}
        </main>

        <footer>
            <p className='text-muted'><em>If you have any questions or concerns about our Privacy Policy, please contact us at support@nextctl.com.</em></p>
        </footer>
      </div>
    </>
  )
}

export default Index