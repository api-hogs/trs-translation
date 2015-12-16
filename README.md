# Trs-translation

Ember component for API_HOGS Trs project.

## Installation

`ember install trs-translation`

##Usage

### Create component `editable-t.js`
```
  import ember from 'ember';
  import tsrtranslation from 'trs-translation/components/trs-translation';
  export default tsrtranslation.extend({
    layoutname: "components/trs-translation",
    session: ember.inject.service(),
    i18n: ember.inject.service(),
    locale: ember.computed.alias('i18n.locale'),
    project: 2,
    isauthenticated: ember.computed.alias('session.isauthenticated'),
    canedit: ember.computed.equal('session.currentuser.isadmin', true),
    token: ember.computed('session.session.content.authenticated.translation_token', function() {
      return this.get('session.session.content.authenticated.translation_token');
    })
  });
```

## Contiributing

* `git clone` this repository
* `npm install`
* `bower install`
