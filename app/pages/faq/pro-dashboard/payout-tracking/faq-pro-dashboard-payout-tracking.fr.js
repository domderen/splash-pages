import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqProDashboardPayoutTrackingFr extends React.Component {
  displayName = 'FaqProDashboardPayoutTrackingFr'

  render() {
    return (
       <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Suivi de vos virements</h2>
        <p className='para'>
          Nous reversons vos fonds automatiquement, tous les jours. Il n’y a pas de palier minimal ni de réserve. 
          Nos frais sont automatiquement déduits de ce reversement.
        </p>
        <p className='para'>
         Vous pouvez suivre nos versements dans notre <a href='https://manage-sandbox.gocardless.com/payouts' 
          target='_blank' className='u-link-color-p u-text-underline'>section Payouts</a>.
        </p>

        <img src='/images/fr/pro/payout.png' />

        <p className='para'>
          Nous indiquons la référence qui s’affichera sur votre compte en banque (ici W-ZFQSSPNDR689DW), ainsi que la liste de 
          tous les paiements individuels faisant partie d’un virement. Cela vous permet de réconcilier ces paiements 
          au niveau comptable.
        </p>

      </Translation>
    );
  }
}
