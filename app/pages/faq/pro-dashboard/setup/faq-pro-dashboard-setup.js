import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardFr from './faq-pro-dashboard-setup.fr';

export default class FaqProDashboard extends React.Component {
  displayName = 'FaqProDashboard'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardFr />
      </FaqProDashboardPage>
    );
  }
}
