import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (children.length <= limit) return children;

  if (!children) return <Text>{children}</Text>;

  const summarize = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summarize}
      <Button
        colorScheme="yellow"
        marginLeft={1}
        size={"xs"}
        fontSize={"bold"}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
