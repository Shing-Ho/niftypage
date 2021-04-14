import React from 'react';
import { useRouter } from 'next/router';
import { Box, Link, Text, Flex } from '@chakra-ui/react';

import { getAttributes, getPunkbodiesByValue } from 'utils/helpers';

const TypeDetail = () => {
  const router = useRouter();
  const { type } = router.query;

  const attrs = getAttributes({});
  if (type) {
    return (
      <Box>
        <Flex>
          <Text fontWeight="bold" mr={3}>
            <Link href="/attributes" mr={1}>Attributes</Link>
            <Link href="/attributes/type">type</Link>:
          </Text>
          {`${type}(${attrs[type.toString()].length})`}
        </Flex>
        <Box mt={8}>
          {
            attrs[type.toString()].map(attr => (
              <Flex>
                <Link mr={1} href={`/attributes/traits/${attr}`}>
                  <Text fontWeight="bold">{`${attr}: `}</Text>
                </Link>
                {`has ${getPunkbodiesByValue(attr).length} punkbodies`}
              </Flex>
            ))
          }
        </Box>
      </Box>
    );
  } else {
    return null;
  }
}

export default TypeDetail;