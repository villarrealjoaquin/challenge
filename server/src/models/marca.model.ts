import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  logo_url: {
    type: String,
    required: true
  }
});

export default mongoose.model('brands', brandSchema);
