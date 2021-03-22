import mongoose, { Document, Schema } from 'mongoose'
import { iResource } from "./Resource";
import CraftManRoles from "../enums/CraftManRoles";

export interface iCraft extends Document {
  name: string,
  role: CraftManRoles,
  // @ts-ignore
  roadMap: Array<Record<iResource | iCraft, number>>
}

const craftSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    unique: true
  },
  role: {
    type: Schema.Types.String,
    required: true
  },
  roadMap: {
    type: Schema.Types.Array,
    required: true
  }
})

const CraftModel = mongoose.model<iCraft>("Craft", craftSchema);

export default CraftModel;
