import React from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

import { getPunkbodiesByValue, getTypeFromValue, getAttributes } from 'utils/helpers';
import NFTCardListView from 'components/NFTCardListView';

const TraitDetail = () => {
  const router = useRouter();
  const { value } = router.query;
  const attrs = getAttributes({});

  if (value) {
    const type = getTypeFromValue(value.toString());
    return (
      <Box>
        <Text fontSize="xl">
          <Flex>
            <Text fontWeight="bold" mr={1}>
              <Link mr={1} href="/attributes/traits">
                Trait
              </Link>
              type:
            </Text>
            <Link href={`/attributes/type/${type}`}>
              {type}
            </Link>
            {`(${attrs[type].length})`}
          </Flex>
          <Flex>
            <Text fontWeight="bold" mr={1}>
              <Link mr={1} href="/attributes/traits">
                Trait
              </Link>
              value:
            </Text>
            <Link href={`/attributes/traits/${value}`}>
              {value}
            </Link>
            {`(${getPunkbodiesByValue(value.toString()).length})`}

          </Flex>

        </Text>
        <Box mt={8}>
          <NFTCardListView punks={getPunkbodiesByValue(value.toString())} />
        </Box>
      </Box>
    )
  } else {
    return null;
  }
}

export default TraitDetail;