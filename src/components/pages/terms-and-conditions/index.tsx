import React from 'react'
import HeroSection from '@/components/shared/heroSection/HeroSection'

function Index() {
  return (
    <>
      <HeroSection/>
      <div className="container py-5">
        <main>
          <section id="introduction">
              <h2 className='text-muted'>Introduction</h2>
              <p className='text-muted'>Before you sign up and download or use downloadable products from NextCTL, please make sure you have read, understood, and agreed to all the terms. By accessing or using NextCTL, we assume you’ve accepted the terms of use given below. These Terms apply to all visitors, users, and others who wish to access or use the Service. If you disagree with any part of the terms, then you do not have permission to access the platform or download any item.</p>
          </section>

          <section id="communications">
              <h2 className='text-muted'>Communications</h2>
              <p className='text-muted'>By creating an account on our website, you agree to subscribe to our newsletter, marketing or promotional materials, and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by using the unsubscribe link or instructions provided in any email or SMS we send.</p>
          </section>

          <section id="accounts">
              <h2 className='text-muted'>Accounts</h2>
              <p className='text-muted'>When you create an account with us, you guarantee that you are above the minimum age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the platform.</p>
              <p className='text-muted'>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account. We are not responsible if any unusual activity happens with your account.</p>
              <p className='text-muted'>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar, or obscene.</p>
              <p className='text-muted'>We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.</p>
          </section>

        {/* <!-- More sections can be added for the remaining content --> */}
        
        </main>
    
          <section id="product-compatibility">
            <h2 className='text-muted'>Product Compatibility/Updates</h2>
            <p className='text-muted'>All the NextCTL items should be designed to be compatible with the latest available technology, but we cannot guarantee about the older items. We check all Scripts, plugins, and templates before final publishing, but we cannot give you full warranty of their proper work.</p>
          </section>

          <section id="unauthorized-usage">
            <h2 className='text-muted'>Unauthorized/Illegal Usage</h2>
            <p className='text-muted'>You may not use the items on NextCTL for any illegal or unauthorized purpose nor may you, in the use of the platform, violate any laws in your jurisdiction (including but not limited to copyright laws) as well as the laws of the European Union and International law. In particular, it is prohibited to use the items on our platform for pages that promote: violence, terrorism, hard pornography, racism, vulgarity content, or warez software links.</p>
            <p className='text-muted'>You cannot reproduce, duplicate, copy, sell, resell, or exploit any portion of NextCTL, use of the offered items on NextCTL, or access to the service without the express written permission by NextCTL or product owner.</p>
            <p className='text-muted'>NextCTL Members are responsible for all content posted on the forum and activity that occurs under your account. We reserve the possibility of blocking your membership account immediately if we will know about such not permitted behavior.</p>
          </section>

          <section id="support">
            <h2 className='text-muted'>Support</h2>
            <p className='text-muted'>Once you have purchased and downloaded a product, you may contact for support with the author of that product via their support channel or using a commenting system. We provide Free Installation support when you have a Cpanel-Based server. Remember, we normally answer within 06-24 hours. Usually, we do not have any restrictions but we do not offer any of our items or service or support to Bangladesh. So if you are from Bangladesh, this is a humble request to you, please do not purchase any of our items.</p>
          </section>

          <section id="ownership">
            <h2 className='text-muted'>Ownership</h2>
            <p className='text-muted'>You may not claim intellectual or exclusive ownership of any of the items offered on NextCTL, modified or unmodified. Products are property of the respective Scripts, themes, templates, or plugin developers. Their products are provided “as is” without warranty of any kind, either expressed or implied. In no event shall our juridical person be liable for any damages including, but not limited to, direct, indirect, special, incidental, or consequential damages or other losses arising out of the use of or inability to use their products.</p>
          </section>

          <section id="termination">
            <h2 className='text-muted'>Termination</h2>
            <p className='text-muted'>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
            <p className='text-muted'>If you wish to terminate your account, you may simply discontinue using the Service.</p>
            <p className='text-muted'>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
          </section>

          <section id="exclusions">
            <h2 className='text-muted'>Exclusions</h2>
            <p className='text-muted'>Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.</p>
            <p className='text-muted'>We reserve the right to change and modify terms and conditions at any time without any prior notice. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.</p>
          </section>

        {/* <!-- Additional sections can be added as needed --> */}

    

        <footer>
          <p className='text-muted'><em>Disclaimer: Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.</em></p>
        </footer>
      </div>
    </>
  )
}

export default Index