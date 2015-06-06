import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';
import Link from '../../../../components/link/link';

export default class FaqProDashboardPaymentCreationFr extends React.Component {
  displayName = 'FaqProDashboardPaymentCreationFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Création de paiement</h2>
        <p className='para'>
          Si vous souhaitez prélever des montants variables ou à intervalle variable, créez des paiements individuels. 
          Sinon consultez la <Link to='faq_pro_dashboard_subscription_creation' className='u-link-color-p u-text-underline'>
          section abonnement</Link>.
        </p>
        <p className='para'>
          Sélectionnez un de vos clients, puis cliquez sur Create > Payment.
        </p>

        <img src='/images/fr/pro/payment-create-buttons.png' />

        <p className='para'>
          Vous pouvez personaliser votre prélèvement :
        </p>
        <ul className='list'>
          <li>Choisissez votre montant (max 5.000€)</li>
          <li>La description vous permet d’identifier la raison pour laquelle vous avez collecté ce paiement</li>
          <li>La référence apparaîtra sur le relevé bancaire de votre client (cela dépend de leur banque)</li>
          <li>Vous pouvez soit collecter le prélèvement dès que possible, soit indiquer une date spécifique</li>
        </ul>

        <img src='/images/fr/pro/payment-create.png' />

      </Translation>
    );
  }
}
