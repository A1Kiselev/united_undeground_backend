import CraftModel, { iCraft } from "../models/Craft";
import CraftManRoles from "../enums/CraftManRoles";
import { iResource } from "../models/Resource";

export const getCraftById = async (id: string) => {
  return CraftModel.find({
    _id: id
  });
}

export const getCraftByName = async (craftName: string) => {
  return CraftModel.find({
    name: craftName
  });
}

export const getCraftByRole = async (craftManRole: CraftManRoles) => {
  return CraftModel.find({
    role: craftManRole
  });
}

export const getCraftByResource = async (resourceName: string) => {
  return CraftModel.find({
    roadMap: resourceName
  });
}

export const updateCraftName = async (currentName: string, updatedName: string) => {
  return CraftModel.findOneAndUpdate({
      name: currentName
    },
    { $set: { name: updatedName } })
}

export const updateCraftRole = async (currentName: string, craftManRole: CraftManRoles) => {
  return CraftModel.findOneAndUpdate({
      name: currentName
    },
    { $set: { role: craftManRole } })
}

export const updateCraftListResources = async (currentName: string, listResources: Array<iResource | iCraft>) => {
  return CraftModel.findOneAndUpdate({
      name: currentName
    },
    { $set: { roadMap: listResources } })
}

export const deleteCraftById = async (id: string) => {
  return CraftModel.deleteOne({
    _id: id
  });
}
