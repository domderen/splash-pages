import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardPaymentCreationFr from './faq-pro-dashboard-payment-creation.fr';

export default class FaqProDashboardPaymentCreation extends React.Component {
  displayName = 'FaqProDashboardPaymentCreation'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardPaymentCreationFr />
      </FaqProDashboardPage>
    );
  }
}
