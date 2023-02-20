import { ExampleOptions } from "./common/types.js";
import { dependencies } from "./differ-execution.js";

const installReactRedux = () => dependencies.push("react-redux@8.0.4");

const installReduxToolkit = () => dependencies.push("@reduxjs/toolkit@1.8.6");

export const setupRedux = (type: ExampleOptions) => {
  if (type.toUpperCase() !== ExampleOptions.REDUX) return;
  installReactRedux();
  installReduxToolkit();
};
