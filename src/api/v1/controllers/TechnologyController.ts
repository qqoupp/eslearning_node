import Technology from "../../../db/models/Technology";

import express from "express";

export const getTechnologies = async (
  req: express.Request,
  res: express.Response
) => {
  const technologies = await Technology.findAll();

  res.send(technologies);
};
