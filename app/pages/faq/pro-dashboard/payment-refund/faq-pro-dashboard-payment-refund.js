import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardPaymentRefundFr from './faq-pro-dashboard-payment-refund.fr';

export default class FaqProDashboardPaymentRefund extends React.Component {
  displayName = 'FaqProDashboardPaymentRefund'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardPaymentRefundFr />
      </FaqProDashboardPage>
    );
  }
}
