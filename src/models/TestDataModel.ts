import TestDataStatuses from "../Utils/TestDataStatuses";

export interface iTestDataModel {
  name: string,
  age: number,
  status: TestDataStatuses
}

export class TestDataObject implements iTestDataModel {
  private readonly _age: number;
  private readonly _name: string;
  private readonly _status: TestDataStatuses;

  constructor(name: string, age: number, status: TestDataStatuses) {
    this._age = age;
    this._name = name;
    this._status = status;
  }

  get age(): number {
    return this._age;
  }

  get name(): string {
    return this._name;
  }

  get status(): TestDataStatuses {
    return this._status;
  }
}
