import React from 'react';
import StoryBigQuote from '../story-big-quote';
import StoryPage from '../story-page';
import StoryQuote from '../story-quote';

export default class StoriesBlueskyBusiness extends React.Component {
  displayName = 'StoriesBlueskyBusiness'

  render() {
    return (
      <StoryPage
        title='Bluesky Business'
        tagline='Bluesky Business reduced late payments by 62.5% in one month with GoCardless'
        tips={[
            'We helped them reduce debtor days by 50% - within a month',
            'GoCardless helped them reduce late payments by 62.5%',
            'We helped them sign up 70% of customers to pay on time in one month',
        ]}
        blurb={
          'Bluesky Business, a book-keeping and accounting service provider, ' +
          'reduced late payments by 62.5% in just one month with GoCardless.'
        }>
        <StoryQuote tag='We used to spend two full days a month just chasing clients for payment'>
          <p className='para u-margin-Tn'>Bluesky Business provide professional book-keeping and accounting services. As a growing business,
          it was important for them to maintain a strong cashflow to finance new hires, and maintain a clear
          sales ledger and forecast.</p>
          <p className='para'>“Only 20% of our customers were paying within the required 30 days. We used to spend two full
          days a month just chasing clients for payment up to three months late,” says Emma Mills, Director.</p>
        </StoryQuote>
        <StoryBigQuote heroClass='story-hero--bluesky' image='/images/testimonials/bluesky__avatar.png'
        person='Emma Mills' position='Bluesky Business'>
          Our cashflow and business have been transformed since we started using GoCardless.
          Within a month our average debtor days had halved and 70% of our customers were paying on time.
          We’re wasting less time chasing payments, and can really focus on growing our business
        </StoryBigQuote>
        <StoryQuote tag='GoCardless gave us the automated Direct Debit solution we needed'>
          <p className='para u-margin-Tn'>
            Bluesky needed an assured payment system that integrated with their Sage 50 accounts,
            and quickly turned to the GoCardless add-on. Now, when each invoice is due, it is automatically
            collected from client's accounts, and marked as “paid” in Sage.
          </p>
        </StoryQuote>
        <StoryQuote tag='Our cashflow and business have been transformed since we started using GoCardless'>
          <p className='para u-margin-Tn'>
            Within a month of switching to GoCardless, 70% of Bluesky’s clients signed up to pay by Direct Debit.
          </p>
          <p className='para'>
            “Our cashflow and business have been transformed since we started using GoCardless.
            Within a month our average debtor days had halved and 70% of our customers were paying on time.
            This means we waste less time chasing payments so we've got the time now to really grow the business”.
          </p>
        </StoryQuote>
      </StoryPage>
    );
  }
}
