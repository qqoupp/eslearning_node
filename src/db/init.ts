import Technology from "./models/Technology";
const isDev = process.env.NODE_ENV === "development";

const dbInit = () => {
  Technology.sync({ alter: isDev });
};
export default dbInit;
