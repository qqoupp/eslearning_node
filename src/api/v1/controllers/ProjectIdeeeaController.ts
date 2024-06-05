import ProjectIdeea from "../../../db/models/ProjectIdeea";

import express from "express";

export const getProjectIdeea = async (
  req: express.Request,
  res: express.Response
) => {
  const projectIdeea = await ProjectIdeea.findAll();

  res.send(projectIdeea);
};