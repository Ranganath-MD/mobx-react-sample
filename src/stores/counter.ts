import { autorun } from "mobx"
import { Counter } from "../models/counter"

export const appCounter = new Counter()

autorun(() => {
  console.log(appCounter)
})
