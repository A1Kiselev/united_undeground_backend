import { TestDataObject } from "../models/TestDataModel";
import TestDataStatuses from "./TestDataStatuses";

const someData = [
  new TestDataObject('test1', 15, TestDataStatuses.farmer),
  new TestDataObject('test2', 25, TestDataStatuses.crafter),
  new TestDataObject('test3', 28, TestDataStatuses.miner),
]

export default someData;
