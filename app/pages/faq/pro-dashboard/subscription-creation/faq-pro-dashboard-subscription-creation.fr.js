import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqProDashboardSubscriptionCreationFr extends React.Component {
  displayName = 'FaqProDashboardSubscriptionCreationFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Création d'abonnement</h2>
        <p className='para'>
          Un abonnement vous permet de créer une suite de paiements réguliers d’un montant fixe : cela vous 
          évite de devoir créer le même paiement tous les mois. 
        </p>
        <p className='para'>
          Sélectionnez un de vos clients, puis cliquez sur Create > Subscription.
        </p>

        <img src='/images/fr/pro/subscription-create-buttons.png' />

        <p className='para'>
          Vous pouvez personaliser votre abonnement :
        </p>
        <ul className='list'>
          <li>Nommez votre abonnement</li>
          <li>Choisissez votre montant (max 5.000€)</li>
          <li>La référence apparaîtra sur le relevé bancaire de votre client (cela dépend de leur banque)</li>
          <li>Choisissez la fréquence : hebdomadaire, mensuelle, annuelle ou personalisée (par exemple tous les 3 mois)</li>
          <li>Choisissez la date du premier prélèvement</li>
          <li>Choisissez la durée de l’abonnement : jusqu’à annulation, une date spécifique ou un nombre de prélèvements 
          définis (par exemple 12 paiements de 100€)</li>
        </ul>

        <img src='/images/fr/pro/subscription-create.png' />

      </Translation>
    );
  }
}