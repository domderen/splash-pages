import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqProDashboardMandateCreationFr extends React.Component {
  displayName = 'FaqProDashboardMandateCreationFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Création de mandat</h2>
        <p className='para'>
          Vous n'avez pas besoin d'ajouter vos clients vous-mêmes dans le tableau de bord. Ils apparaîtront
          automatiquement une fois qu'ils auront rempli notre page de mandat. Si vous avez déjà des clients qui
          vous paient par prélèvement bancaire, contactez-nous pour que nous les importions.
        </p>

        <p className='para'>
          Dans notre <a href='https://manage-sandbox.gocardless.com/customers' target='_blank'
          className='u-link-color-p u-text-underline'>section Customers</a>, vous possédez un lien que vous pouvez 
          envoyer à tous vos clients (veuillez nous contacter si vous souhaitez utiliser un mandat papier).
        </p>

        <img src='/images/fr/pro/create-customer.png' />

        <p className='para'>
          Ce lien permet à vos clients d’indiquer leurs données bancaires de manière sécurisée (dans la langue 
          de leur choix). Cela vous donne l’autorisation de commencer à prélever directement de leur compte en banque.
        </p>

        <img src='/images/fr/pro/sepa-mandate-page.png' />

        <p className='para'>
          La liste de tous vos clients est visible dans la <a href='https://manage-sandbox.gocardless.com/customers' target='_blank'
          className='u-link-color-p u-text-underline'>même section</a>, et vous pouvez l’exporter vers Excel.
        </p>

      </Translation>
    );
  }
}
