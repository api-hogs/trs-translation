import Ember from 'ember';

const { Component, inject, computed } = Ember;

export default Component.extend({
  tagName: '',
  //services
  session: null,
  i18n: null,
  //props
  isEditable: false,
  key: null,
  project: null,
  locale: "en",
  endpoint: "http://api.translations.api-hogs.io/api/v1/languages",
  token: null,
  isAuthenticated: false,

  canEdit: computed('isAuthenticated', function(){
    return this.get('isAuthenticated');
  }),

  value: computed('key', 'locale', function(){
    const i18n = this.get('i18n');
    return i18n.t(this.get('key'));
  }),
  isMissing: computed('key', function(){
    return (/(Missing translation)/).test((this.get('i18n').t(this.get('key'))).toString());
  }),
  trans: computed('value', {
    get(){
      return this.get('value');
    },
    set(prop, value){
      if (Ember.isEmpty(value)){
        value = this.get('value');
      }
      this.set('_trans', value);
      return value;
    }
  }),

  ajax(method, params){
    let token = this.get('token');
    const url = `${this.get('endpoint')}/${this.get('locale')}`;

    return Ember.$.ajax({
      type: method,
      dataType: "json",
      contentType: "application/json",
      url: url,
      headers: {"Authorization": token},
      data: JSON.stringify(params)
    });
  },
  save() {
    let locale = this.get('locale');
    let data = {
      project: this.get('project'),
      id: locale,
      params: {
        key: this.get('key'),
        value: this.get('_trans').toString()
      }
    };
    this.ajax('PUT', data).then(() =>{
      let localizationObj = {};
      localizationObj[data.params.key] = data.params.value;
      this.get('i18n').addTranslations(locale, localizationObj);
      this.notifyPropertyChange('value');
    });
  },

  actions: {
    toggleEdit(){
      if(this.isEditable){
        var __this = this;

        if(this.get('trans').length > 0) {
          __this.set('value', this.get('trans'));
          __this.save();
        }
      }
      this.toggleProperty('isEditable');
    },
    cancelEdit(){
      this.toggleProperty('isEditable');
    },
    notingAction(){
      //need for bubbles
    }
  }
});
