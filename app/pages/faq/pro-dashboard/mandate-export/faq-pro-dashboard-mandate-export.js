import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardMandateExportFr from './faq-pro-dashboard-mandate-export.fr';

export default class FaqProDashboardMandateExport extends React.Component {
  displayName = 'FaqProDashboardMandateExport'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardMandateExportFr />
      </FaqProDashboardPage>
    );
  }
}
