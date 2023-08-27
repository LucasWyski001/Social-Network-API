const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const moment = require('moment');
// Schema to create Post model
const thoughtSchema = new Schema(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reaction: [reactionSchema],
    text: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `tagCount` that gets the amount of comments per user
thoughtSchema
  .virtual('tagCount')
  // Getter
  .get(function () {
    return this.tags.length;
  });

// Initialize our Post model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
