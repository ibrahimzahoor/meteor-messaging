import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import { Mongo } from 'meteor/mongo';

import './list.html';

// Components used inside the template
import './list-item.js';
import './new.js';

Template.ConversationList.onCreated(function() {

  this.autorun(() => {
    new SimpleSchema({
      conversationsListReady: { type: Boolean },
      conversationsList: { type: Mongo.Cursor },
    }).validate(Template.currentData());
  });

});

Template.ConversationList.helpers({

});

Template.ConversationList.events({

});