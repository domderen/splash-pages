import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardPaymentTrackingFr from './faq-pro-dashboard-payment-tracking.fr';

export default class FaqProDashboardPaymentTracking extends React.Component {
  displayName = 'FaqProDashboardPaymentTracking'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardPaymentTrackingFr />
      </FaqProDashboardPage>
    );
  }
}
