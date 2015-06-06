import React from 'react';
import Message from '../../components/message/message';
import ProductComparison from '../../components/product-comparison/product-comparison';
import Tabs from '../../components/tabs/tabs';
import StartTakingPaymentsCTA from '../../components/start-taking-payments/start-taking-payments';
import PayOnePercentCTA from '../../components/pay-one-percent/pay-one-percent';
import ClockIcon from '../../icons/svg/clock';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import CheckListIcon from '../../icons/svg/checklist';
import CustomerIcon from '../../icons/svg/customer';
import SecurityIcon from '../../icons/svg/security';
import DeveloperIcon from '../../icons/svg/developer';
import PhoneIcon from '../../icons/svg/phone';
import Link from '../../components/link/link';
import Translation from '../../components/translation/translation';

export default class FeaturesFr extends React.Component {
  displayName = 'FeaturesFr'

  render() {
    return (
      <Translation locales='fr'>
        <div>
          <div className='page-hero page-hero--medium u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='page-hero__inner'>
                <div className='page-hero__text'>
                  <h1 className='u-text-heading u-margin-Tm u-color-invert u-text-center u-text-xl u-text-light'>
                    Commencez à prélever tout de suite
                  </h1>
                  <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    GoCardless est le moyen le plus rapide et facile <br />pour collecter des prélèvements SEPA par internet
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='sticky-nav'>
            <div ng-gc-sticky-nav
              className='sticky-nav__inner u-background-light-gray u-text-heading u-text-xxs u-text-light u-text-no-smoothing'>
              <div className='site-container u-padding-Vm'>
                <ul className='u-pull-start u-margin-Txxs'>
                  <li className='sticky-nav__item'>
                    <a href='#overview' du-scrollspy ng-gc-smooth-scroll id='track-sticky-nav-overview' className='sticky-nav__link'>
                      Aperçu
                    </a>
                  </li>
                  <li className='sticky-nav__item'>
                    <a href='#features' du-scrollspy ng-gc-smooth-scroll id='track-sticky-nav-features' className='sticky-nav__link'>
                      Fonctionalités
                    </a>
                  </li>
                  <li className='sticky-nav__item'>
                    <a href='#dashboard' du-scrollspy ng-gc-smooth-scroll id='track-sticky-nav-dashboard' className='sticky-nav__link'>
                      Tableau de bord
                    </a>
                  </li>
                  <li className='sticky-nav__item'>
                    <a href='#pricing' du-scrollspy ng-gc-smooth-scroll id='track-sticky-nav-pricing' className='sticky-nav__link'>
                      Tarifs
                    </a>
                  </li>
                </ul>
                <Link to='contact_sales' id='track-sticky-nav-contact-sales'
                  className={
                    'btn btn--small btn--hollow u-pull-end u-text-transform-none ' +
                    'u-text-light u-text-xxs u-text-no-smoothing u-margin-Rs'
                  }>
                  <Message pointer='cta.pro' />
                </Link>
              </div>
              <hr className='u-margin-An' />
            </div>
          </div>
          <div className='section-scroll-target' id='overview'>
            <div className='site-container u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='grid'>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <ClockIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-green' />
                      <ClockIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Commencez en 24 heures
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      Pas de long processus bancaire. Vous pouvez commencer à prélever dès demain en
                      nous <Link to='contact_sales'>contactant maintenant</Link>.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                      <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Pas de frais d'intégration
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      Payez 1% par transaction réussie (plafonné à 2€), sans frais d'installation et d'abonnement.
                      Zéro frais sur les incidents.

                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <CheckListIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                      <CheckListIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Simplifiez-vous la vie
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      GoCardless automatise la collecte, suivi et reconciliation de vos paiements :
                      il suffit de définir le montant et la date.
                    </p>
                  </div>
                </div>
                <div className='grid u-margin-Txl u-padding-Tl'>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <CustomerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-green' />
                      <CustomerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Fidélisez vos client
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      Grâce au prélèvement SEPA, GoCardless vous évite de perdre vos clients à cause de
                      l'expiration ou d'un échec de carte.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <SecurityIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                      <SecurityIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Sécurité de calibre militaire
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      Toutes les données bancaires sont chiffrées avec RSA et ne sont transmises que par
                      le biais de serveurs Européens sécurisés.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <DeveloperIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                      <DeveloperIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Évoluez facilement
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      Automatisez plus en profondeur grâce à l'API. Tout ce qu'il y a à savoir est
                      dans <Link to='pro'>GoCardless Pro</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className='u-margin-An' />
          <div className='section-scroll-target' id='features'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='grid u-padding-Vxl'>
                <div className='grid__cell u-size-1of2 u-text-center'>
                  <img src='/images/products/real-time-reports.jpg' className='basic-page__real-time-reports-image' />
                </div>
                <div className='grid__cell u-size-1of2 u-margin-Tl'>
                  <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Bl u-margin-Ts'>
                    Ne laissez rien au hasard
                  </h2>
                  <h3 className='u-text-s'>Statuts de paiement instantanés</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Notre tableau de bord vous permet de voir rapidement où en sont vos
                    clients et vos paiements en temps réel.
                  </p>
                  <h3 className='u-text-s'>Exportez vos données</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Gérez vos données de la manière que vous préfèrez - par exemple pour l'utiliser
                    dans votre comptabilité.
                  </p>
                  <h3 className='u-text-s'>Encaissez des paiements tous les jours</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Avec GoCardless vous pouvez encaisser des paiements aussi souvent que vous le
                    souhaitez, sans le moindre coût ou difficulté supplémentaire.
                  </p>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='grid u-padding-Vxl'>
                <div className='grid__cell u-size-1of2'>
                  <h2 className='u-text-l u-text-heading u-color-heading u-text-light u-margin-Bl'>
                    Vos clients vont l'adorer
                  </h2>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    GoCardless est un Etablissement de Paiement Agréé, habilité à collecter des paiements
                    à travers l’Union Européenne ce qui rend les paiements faciles pour vous et vos clients.
                  </p>
                  <h3 className='u-text-s'>Mandat électronique simple</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Tout se passe en ligne. En utilisant notre mandat sécurisé, vos clients peuvent
                    autoriser les prélèvements en 2 minutes - même depuis leur téléphone.
                  </p>
                  <h3 className='u-text-s'>Votre logo sur le devant de la scène</h3>
                  <p className='u-color-p u-margin-Bm'>
                    Garantissez la meilleure expérience client en ajoutant votre logo à nos pages
                    de paiement, ce qui rassure vos utilisateurs.
                  </p>
                  <h3 className='u-text-s'>Une façon simple et sécurisée de payer</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Avec le prélèvement bancaire, vos clients n'ont pas besoin de s'inquiéter de manquer
                    un paiement et sont protégés par les règles SEPA.
                  </p>
                  <a href="https://pay-sandbox.gocardless.com/AL0000005B2S6Q" target="_blank"
                  className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi u-block u-margin-Txl'>
                    Voir un exemple de page de paiement
                  </a>
                </div>
                <div className='grid__cell u-size-1of2 u-text-center'>
                  <img src='/images/features/payment-page--gyms.jpg' className='vertical-page__mobile-image' />
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-1of3 u-center'>
                  <figure className='svg-icon u-center'>
                    <PhoneIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <PhoneIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-center'>
                    <p className='u-text-s u-color-p u-margin-Ts'>
                      Prenez contact avec notre équipe pour commencer à prélever rapidement
                    </p>
                  </div>
                  <Link to='contact_sales' id='track-cta-contact-sales' className='btn btn--hollow u-margin-Tm'>Contactez-nous</Link>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
              <div className='site-container u-padding-Vxl'>
                <ProductComparison />
                <table className='u-size-full'><tfoot>
                    <tr className='comparison-table__row'>
                      <td />
                      <td />
                      <td className='u-padding-As u-size-1of3'>
                        <Link to="pro" id='track-comparison-table-pro' className='u-color-primary'>
                          Apprenez-en plus sur GoCardless Pro
                        </Link>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <hr className='u-margin-An' />
          </div>
          <div className='section-scroll-target' id='dashboard'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-2of3 u-center'>
                  <h2 className='u-text-heading u-color-heading u-text-xl u-text-light u-margin-Bs'>
                    Votre tableau de bord
                  </h2>
                  <div className='u-text-heading u-color-heading u-text-l u-text-light'>
                    Entièrement en ligne, sans installation.<br />Tout ce dont vous avez besoin pour être payé.
                  </div>
                  <hr className='u-margin-Vxxl' />
                </div>
                <div className='u-text-center u-text-heading u-text-upcase u-text-xxs u-text-semi'>
                  <Tabs triggers={[(
                    <a href='#dashboard-home' id='track-dashboard-home'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                      Tableau de bord
                    </a>
                  ), (
                    <a href='#add-customers' id='track-dashboard-customers'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                      Ajout de client
                    </a>
                  ), (
                    <a href='#take-payments' id='track-dashboard-payments'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                      Collecte de paiements
                    </a>
                  ),]}>
                    <div>
                      <img src='/images/basic/fr/basic-dashboard-home.png'
                        className='basic-page__dashboard-image' alt='Interface du tableau de bord GoCardless' />
                    </div>
                    <div>
                      <img src='/images/basic/fr/basic-add-customer.png'
                        className='basic-page__dashboard-image' alt="Formulaire d'ajout de client" />
                    </div>
                    <div>
                      <img src='/images/basic/fr/basic-take-payment.png'
                        className='basic-page__dashboard-image' alt='Suivi du statut des paiements' />
                    </div>
                  </Tabs>
                  <Link to='faq_pro_dashboard' id='track-cta-contact-sales' className='btn btn--hollow u-margin-Tm'>Guide d'utilisation</Link>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
          </div>
          <div className='section-scroll-target' id='pricing'>
            <PayOnePercentCTA />
            <hr className='u-margin-An' />
            <StartTakingPaymentsCTA />
          </div>
        </div>
      </Translation>
    );
  }
}
