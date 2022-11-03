import { Router } from "express";

import createPersonController from "../useCases/createPerson";
import findPersonController from "../useCases/findPerson";
import listPersonController from "../useCases/listPeople";
import updatePersonController from "../useCases/updatePerson";
import updatePersonContactsController from "../useCases/updatePersonContacts";
import deletePersonController from "../useCases/deletePerson";

const personRoutes = Router();

personRoutes.post("/", (request, response) =>
  createPersonController().handle(request, response)
);

personRoutes.get("/", (request, response) =>
  listPersonController().handle(request, response)
);

personRoutes.get("/:id", (request, response) =>
  findPersonController().handle(request, response)
);

personRoutes.put("/:id", (request, response) =>
  updatePersonController().handle(request, response)
);

personRoutes.put("/:id/contacts", (request, response) =>
  updatePersonContactsController().handle(request, response)
);

personRoutes.delete("/:id", (request, response) =>
  deletePersonController().handle(request, response)
);

export { personRoutes };
