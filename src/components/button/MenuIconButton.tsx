import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: VFC = memo((props) => {
  const { onOpen } = props;
return (
  <IconButton
  aria-label="menuボタン"
  icon={<HamburgerIcon />}
  size="sm"
  variant="unstyled"
  display={{ base: "block", md: "noen" }}
  onClick={onOpen}
/>
);
});