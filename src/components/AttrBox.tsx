import React from 'react';
import { Box, Link } from '@chakra-ui/layout';
import { Stat, StatLabel, StatHelpText } from '@chakra-ui/react';

type AttrBoxProps = {
  type: string,
  value: string,
}

const AttrBox = ({ type, value }: AttrBoxProps) => {
  return (
    <Box width="150" mr="10">
      <Stat>
        <StatLabel>
          <Link href={`/attributes/type/${type}`}>{type}</Link>
        </StatLabel>
        <StatHelpText>
          <Link href={`/attributes/traits/${value}`}>{value}</Link>
        </StatHelpText>
      </Stat>
    </Box>
  )
}

export default AttrBox;