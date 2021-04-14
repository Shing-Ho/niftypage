import React from 'react';
import { Box, Text, Flex, Link } from '@chakra-ui/react';
import { getAttributes } from 'utils/helpers';

const Type = () => {
  const attrs = getAttributes({});

  return (
    <Box>
      <Text>
        {`There are ${Object.keys(attrs).length} trait types:`}
      </Text>
      <Box mt={8}>
        {
          Object.keys(attrs).map(attr => (
            <Flex>
              <Text fontWeight="bold" mr={1}>
                <Link href={`/attributes/type/${attr}`}>{attr}</Link>
              </Text>
              <Text>
                {`has ${attrs[attr].length} trait types`}
              </Text>
            </Flex>
          ))
        }
      </Box>
    </Box>
  )
}

export default Type;