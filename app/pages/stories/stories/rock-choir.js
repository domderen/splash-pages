import React from 'react';
import StoryBigQuote from '../story-big-quote';
import StoryPage from '../story-page';
import StoryQuote from '../story-quote';

export default class StoriesStoryRockClub extends React.Component {
  displayName = 'StoriesStoryRockClub'

  render() {
    return (
      <StoryPage
        title='Rock Choir'
        tagline='Rock Choir cut failed payments to 1% by switching to online Direct Debit with GoCardless'
        tips={[
          'GoCardless helped them reduce payment failure rates to 1%',
          'GoCardless helped them retry failed payments instantly',
          'We helped them grow past 16,000 members',
        ]}>
        <StoryQuote tag='I seemed to spend all my time chasing people'>
          <p className='para u-margin-Tn'>
            <a href='http://www.rockchoir.com/' className='u-link-color-p u-text-underline'
            target='_blank'>Rock Choir</a> is the UK’s leading contemporary choir group.
            With members all around the country, collecting regular monthly payments became a
            logistical nightmare. “We originally asked members to pay by card, but the failure
            rates on these approached 5% every month.”
            This was largely due to card expiry &amp; cancellation.
          </p>
          <p className='para'>
            “I seemed to spend all my time chasing people to update their card details -
            there was no way of retrying these payments,” explained director David Lusher.
          </p>
        </StoryQuote>
        <StoryBigQuote heroClass='story-hero--rock-choir' image='/images/testimonials/rock-choir__avatar.png'
        person='Dave Lusher' position='Rock Choir'>
          “GoCardless have taken all of the pain out of setting up and managing Direct Debit”
        </StoryBigQuote>
        <StoryQuote tag='Members can now easily set up and manage their payments'>
          <p className='para u-margin-Tn'>
            Rock Choir realised that the high retention rates associated with Direct Debit may
            offer the solution they needed. After considering various providers, Rock Choir
            integrated GoCardless into their website. “Members can now easily set up and manage
            their payments from our custom CRM.”
          </p>
        </StoryQuote>
        <StoryQuote tag='The whole payments process is much less time consuming'>
          <p className='para u-margin-Tn'>
            Thanks to GoCardless, recurring failure rates were slashed to around 1%, dramatically
            reducing the administrative burden. Retrying failed payments also became much simpler.
            “Rather than chasing people to update their details, we can now retry failed payments at the click of a button”.
          </p>
          <p className='para'>
            “Since using GoCardless, the whole payments process is much less time consuming and has
            allowed us to focus on strategy and expansion.”
          </p>
        </StoryQuote>
      </StoryPage>
    );
  }
}
