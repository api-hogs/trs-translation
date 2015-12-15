import Trs from 'trs-translation/components/trs-translation';
import ENV from '../config/environment';

const { service } = Ember.inject;
const { oneWay } = Ember.computed;

export default Trs.extend({
  session: service(),
  i18n: service(),

  endpoint: ENV.endpoint,
  project: 4,
  locale: oneWay('i18n.locale'),
  isAuthenticated: oneWay('session.isAuthenticated'),
  token: oneWay('session.session.content.authenticated.translation_token')

});
