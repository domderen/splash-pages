import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqProDashboardMandateExportFr extends React.Component {
  displayName = 'FaqProDashboardMandateExportFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Exporter un mandat</h2>
        <p className='para'>
          Vous pouvez exporter vos mandats en format PDF, par exemple pour les envoyer à vos clients.
        </p>
        <p className='para'>
          Sélectionnez le client dont vous voulez exporter le mandat, puis cliquez sur son mandat :
        </p>

        <img src='/images/fr/pro/mandate-id.png' />

        <p className='para'>
          Vous pouvez enregistrer le mandat au format PDF en sélectionnant “Export” dans les options en haut à droite :
        </p>

        <img src='/images/fr/pro/mandate-export-buttons.png' />

        <p className='para'>
          Vous pouvez choisir la langue du mandat, si votre client n’est pas Français par exemple :
        </p>

        <img src='/images/fr/pro/mandate-export.png' />

        <p className='para'>
          <strong>Note</strong> : en cas de difficultés de téléchargement, nous recommendons d’essayer avec le navigateur Chrome.
        </p>

      </Translation>
    );
  }
}
