# Trs-translation

Ember component for API_HOGS Trs project.

## Installation

`ember install trs-translation`

##Usage

### Create component `editable-t.js`
```javascript
  import ember from 'ember';
  import trsTranslation from 'trs-translation/components/trs-translation';
  export default trsTranslation.extend({
    layoutname: "components/trs-translation",
    session: ember.inject.service(),
    i18n: ember.inject.service(),
    locale: ember.computed.alias('i18n.locale'),
    project: 0, //project id which you created in system
    isAuthenticated: ember.computed.alias('session.isAuthenticated'),
    canedit: ember.computed.equal('session.currentuser.isAdmin', true),
    token: ember.computed('session.session.content.authenticated.translation_token', function() {
      return this.get('session.session.content.authenticated.translation_token');
    })
  });
```

## Contiributing

* `git clone` this repository
* `npm install`
* `bower install`
