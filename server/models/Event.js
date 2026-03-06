const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Event title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Event description is required'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  date: {
    type: Date,
    required: [true, 'Event date is required']
  },
  location: {
    type: String,
    required: [true, 'Event location is required']
  },
  type: {
    type: String,
    enum: ['hackathon', 'workshop', 'conference', 'meetup'],
    default: 'hackathon'
  },
  imageUrl: {
    type: String,
    default: 'https://via.placeholder.com/300x200'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: String,
    default: 'System'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);