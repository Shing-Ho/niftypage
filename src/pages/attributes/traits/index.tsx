import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import _ from 'lodash';

import { getAttributes, getPunkbodiesByValue } from 'utils/helpers';

const Traits = () => {
  const attrs = getAttributes({});

  const getSortedValuesArray = () => {
    const values = _.flatten(Object.values(attrs));

    const arr = values.map(value => ({
      text: value,
      count: getPunkbodiesByValue(value).length
    }));

    return arr.sort((a,b) => {return a.count - b.count});
  }

  return (
    <Box>
      {
        getSortedValuesArray().map(value => (
          <Flex>
            <Text fontWeight="bold" mr={1}>
              <Link href={`/attributes/traits/${value.text}`}>{value.text}</Link>
            </Text>
            has {value.count} punkbodies
          </Flex>
        ))
      }
    </Box>
  )
};

export default Traits;