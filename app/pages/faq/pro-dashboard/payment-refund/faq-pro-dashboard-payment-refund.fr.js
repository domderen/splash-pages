import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';
import Link from '../../../../components/link/link';

export default class FaqProDashboardPaymentRefundFr extends React.Component {
  displayName = 'FaqProDashboardPaymentRefundFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Remboursement de paiement</h2>
        <p className='para'>
          Il vous est possible de rembourser un prélèvement, en entier ou partiellement.
        </p>
        <p className='para'>
          Sélectionnez un de vos paiements : seuls les paiements qui ont déjà été collectés (de statut Confirmed ou Paid Out)
          peuvent être remboursés. Cliquez ensuite sur Refund.
        </p>

        <img src='/images/fr/pro/refund-buttons.png' />

        <p className='para'>
          Vous pouvez choisir le montant que vous souhaitez rembourser :
        </p>

        <img src='/images/fr/pro/refund-amount.png' />

        <p className='para'>
          Votre remboursement sera effectué sous 48 heures et apparaîtra dans l'historique de votre paiement :
        </p>

        <img src='/images/fr/pro/refund-tracking.png' />

        <p className='para'>
          Ce remboursement sera déduit du prochain versement de fonds que nous enverrons sur votre compte en banque.
        </p>

      </Translation>
    );
  }
}
