import mongoose, {Schema} from "mongoose";

const LLMRequestSchema = Schema({
  query: String,
  responses: [
    {
      provider: String,
      responseText: String,
      responseTime: Number
    }
  ],
  selectedProvider: String,
  createdAt: {
    type: Date, 
    default: Date.now
  }
});

export default LLMRequest = mongoose.model('LLMRequest', LLMRequestSchema);
