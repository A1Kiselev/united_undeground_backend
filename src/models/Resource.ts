import mongoose, { Schema, Document } from "mongoose";

export interface iResources extends Document {
  type: Schema.Types.String,
  name: Schema.Types.String,
  resourcesLevel: Schema.Types.Number
}

const resourcesSchema = new Schema({
  type: {
    type: Schema.Types.String,
    required: true
  },
  name: {
    type: Schema.Types.String,
    required: true
  },
  resourcesLevel: {
    type: Schema.Types.Number,
    required: true
  }
});

const ResourceModel = mongoose.model<iResources>("Resource", resourcesSchema);

export default ResourceModel;
