# Trs-translation

Ember component for API_HOGS Trs project.

## Installation

`ember install trs-translation`

##Usage

### Create component `editable-t.js`
```javascript
  import Ember from 'ember';
  import trsTranslation from 'trs-translation/components/trs-translation';
  export default trsTranslation.extend({
    layoutName: "components/trs-translation",
    session: Ember.inject.service(),
    i18n: Ember.inject.service(),
    locale: Ember.computed.alias('i18n.locale'),
    project: 0, //project id which you created in system
    isAuthenticated: Ember.computed.alias('session.isAuthenticated'),
    canEdit: Ember.computed.equal('session.currentuser.isAdmin', true),
    token: Ember.computed('session.session.content.authenticated.translation_token', function() {
      return this.get('session.session.content.authenticated.translation_token');
    })
  });
```
### Use in your templates: `{{editable-t key="account.accountInfo"}}`
## Contiributing

* `git clone` this repository
* `npm install`
* `bower install`
