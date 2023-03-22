import { styled, Button } from "@nextui-org/react";

export const MyStyledButton = styled(Button, {
  boxShadow: "$md", // shadows.md

  variants: {
    size: {
      mysize: {
        height: "$12", // space[12]
        borderRadius: "$xs", // radii.xs
      },
    },
    color: {
      mycolor: {
        background: "$linkColor", // colors.green800
        color: "white",

        border: "$space$1 solid transparent",
        "&:hover": {
          background: "#c5ac93",

          border: "$linkColor solid 2px",
        },
        "&:active": {
          background: "$linkColor",
        },
        "&:focus": {
          borderColor: "#c5ac93",
        },
      },
    },
  },
});
