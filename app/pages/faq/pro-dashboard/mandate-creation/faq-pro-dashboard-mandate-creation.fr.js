import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqProDashboardMandateCreationFr extends React.Component {
  displayName = 'FaqProDashboardMandateCreationFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Mise en place</h2>
        <p className='para'>
          GoCardless vous permet d’obtenir des mandats de prélèvement SEPA et de collecter vos 
          paiement récurrents sans la moindre intégration technique.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Démarrage
        </h3>
        <p className='para'>
          Vous pouvez <a href='https://manage-sandbox.gocardless.com/registrations/create' target='_blank'
          className='u-link-color-p u-text-underline'>créer un compte test</a> gratuitement. A titre indicatif, 
          tous les liens dans ce document redirigent vers votre compte test.
        </p>
        <p className='para'>
          Quand vous souhaitez prélever des paiements réels, il nous faut plusieurs documents afin de 
          pouvoir vous créer un compte actif :
        </p>
        <ul className='list'>
          <li>Signer notre contrat</li>
          <li>Envoyer un RIB au nom de votre société</li>
          <li>Envoyer une copie de la carte d’identité ou du passeport de votre gérant et de chaque individu 
          qui détient plus de 25% du capital de votre société</li>
        </ul>
        <p className='para'>
          Une fois ces documents fournis, nous vous créerons un compte (typiquement sous 24 heures) et vous 
          pourrez commencer à utiliser GoCardless pour vos clients, sans avoir besoin de passer par votre banque.
        </p>
        <p className='para'>
          Veuillez noter que ce que vous créez dans votre compte test ne sera pas transmis au compte actif.
        </p>
        <p className='para'>
		  Si vous souhaitez migrer des clients avec lesquels vous avez déjà un mandat de prélèvement bancaire, 
		  veuillez nous contacter.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Echéancier SEPA
        </h3>
        <p className='para'>
          Vous devez créer un paiement quelques jours avant la date à laquelle vous souhaitez prélever votre client :
        </p>
        <ul className='list'>
          <li>6 jours ouvrables si c’est le premier prélèvement pour un nouveau client</li>
          <li>3 jours ouvrables si c’est un prélèvement ultérieur</li>
        </ul>
        <p className='para'>
          Nous collectons les prélèvements et vous les reversons tous les jours automatiquement : vous recevrez ces 
          fonds 3 jours ouvrables après la date de paiement du client.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Préparation du compte
        </h3>
        <p className='para'>
          Vous devez personnaliser votre compte dans <a href='https://manage-sandbox.gocardless.com/organisation/creditors'
          target='_blank' className='u-link-color-p u-text-underline'>notre section Creditors</a> :
        </p>
        <ul className='list'>
          <li>Ajouter un logo qui sera utilisé sur votre page de mandat</li>
          <li>Ajouter un compte en banque, sur lequel nous verserons vos paiements</li>
        </ul>

      </Translation>
    );
  }
}
