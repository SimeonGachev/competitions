import { createId, isCuid } from "@paralleldrive/cuid2";

const Id = {
  newId: createId,
  isValidId: isCuid,
};

export default Id;
