import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardMandateCreationFr from './faq-pro-dashboard-mandate-creation.fr';

export default class FaqProDashboardMandateCreation extends React.Component {
  displayName = 'FaqProDashboardMandateCreation'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardMandateCreationFr />
      </FaqProDashboardPage>
    );
  }
}
