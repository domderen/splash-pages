import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqProDashboardPaymentTrackingFr extends React.Component {
  displayName = 'FaqProDashboardPaymentTrackingFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Suivi de vos paiements</h2>
        <p className='para'>
          Vous pouvez suivre le statut de chaque prélèvement soit en sélectionnant un client particulier, soit dans la <a href='https://manage-sandbox.gocardless.com/payments' 
          target='_blank' className='u-link-color-p u-text-underline'>liste de vos paiements</a>.
        </p>
        <p className='para'>
          Il est possible de filtrer par période ou statut (par exemple pour voir les paiements échoués récemment), ainsi que d’exporter vers Excel.
        </p>

        <p className='para'>
          Chaque étape est visible, que ce soit un paiement réussi :
        </p>

        <img src='/images/fr/pro/payment-success.png' />

        <p className='para'>
          Ou un paiement échoué :
        </p>

        <img src='/images/fr/pro/payment-failed.png' />

        <p className='para'>
          Il vous est possible de <strong>retenter un paiement</strong> directement en cliquant “Retry”.
        </p>

        <img src='/images/fr/pro/payment-retry.png' />

      </Translation>
    );
  }
}
