import { future } from "mdx-deck/themes";
import nightOwl from "prism-react-renderer/themes/nightOwl";

export const theme = {
  ...future,
  colors: {
    ...future.colors,
    background: "rgb(1, 22, 39)"
  },
  codeSurfer: {
    ...nightOwl,
    showNumbers: false
  }
};
