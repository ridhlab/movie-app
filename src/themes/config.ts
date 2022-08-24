import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";
import { PRIMARY_COLOR_NORMAL, PRIMARY_COLOR_DARKER } from "../constants/constants";

const Text: ComponentStyleConfig = {
  baseStyle: {
    fontSize: 14,
  },
};

const theme = extendTheme({
  components: { Text },
  colors: {
    primary: {
      darker: PRIMARY_COLOR_DARKER,
      normal: PRIMARY_COLOR_NORMAL,
    },
  },
});

export default theme;
