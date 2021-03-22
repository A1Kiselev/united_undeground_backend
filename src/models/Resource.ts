import mongoose, { Schema, Document } from "mongoose";
import ResourceTypes from "../enums/ResourceTypes";

export interface iResource extends Document {
  name: string,
  type: ResourceTypes,
}

const resourcesSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
  type: {
    type: Schema.Types.String,
    required: true
  }
});

const ResourceModel = mongoose.model<iResource>("Resource", resourcesSchema);

export default ResourceModel;
