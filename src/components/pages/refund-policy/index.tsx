import HeroSection from '@/components/shared/heroSection/HeroSection'
import React from 'react'

function Index() {
  return (
    <>
      <HeroSection/>
      <div className="container py-5">
            
        <h1 className='text-muted'>Refund Policy for NextCTL Services</h1>

        <p className='text-muted'>At NextCTL, our primary aim is customer satisfaction. While we always strive to offer services that meet your business needs, we understand that situations may arise where a refund is requested. Below is our Refund Policy that governs and outlines the circumstances under which refunds may be granted.</p>

        <h2 className='text-muted'>Initial Deposit</h2>

        <p className='text-muted'>All our services start with an initial, non-refundable deposit. This deposit is used to cover initial project set-up costs and is non-refundable except in cases where we fail to deliver the committed services within the stipulated timeline.</p>

        <h2 className='text-muted'>Service-Specific Policies</h2>

        <ul className='text-muted'>
            <li><strong>Web Development &amp; Software Solutions:</strong> Refunds are available up to the first milestone only. After the first milestone, no refunds will be provided.</li>
            <li><strong>Cloud Services:</strong> Due to the nature of cloud services, refunds are generally not available. However, we will examine these on a case-by-case basis.</li>
            <li><strong>IT Consulting:</strong> Fees for IT Consulting services are non-refundable once the consultation has occurred, but refunds may be granted if you cancel at least 48 hours in advance.</li>
        </ul>

        <h2 className='text-muted'>Process for Requesting a Refund</h2>

        <ol className='text-muted'>
            <li>Contact our Customer Support team through [email/phone number].</li>
            <li>Provide a detailed reason for your dissatisfaction and the request for a refund.</li>
            <li>Your request will be evaluated within 7 business days, and you will be notified of the decision immediately thereafter.</li>
        </ol>

        <h2 className='text-muted'>Exceptions</h2>

        <p className='text-muted'>Refunds will not be available under the following conditions:</p>

        <ul className='text-muted'>
            <li>Project completion and closure.</li>
            <li>Inactivity from the client’s end for more than 30 days.</li>
            <li>Violation of NextCTL’s Terms of Service.</li>
        </ul>

        <h2 className='text-muted'>Changes to Refund Policy</h2>

        <p className='text-muted'>NextCTL reserves the right to modify this Refund Policy at its sole discretion. Any changes will be posted on this page, and it is the customer’s responsibility to stay updated with any modifications.</p>

        <p className='text-muted'>By availing any of our services, you agree to be bound by this Refund Policy.</p>

        <p className='text-muted'>For any questions regarding refunds, please contact us at refund@nextctl.com </p>
      </div>
    </>
  )
}

export default Index