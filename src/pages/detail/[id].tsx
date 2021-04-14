import React from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Link } from '@chakra-ui/layout';

import NFTCard from 'components/NFTCard';
import AttrBox from 'components/AttrBox';
import { getAttributeByPunkId } from 'utils/helpers';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  if (id) {
    const attributes = getAttributeByPunkId(parseInt(id.toString(), 10));
    return (
      <Box>
        <Flex>
          <NFTCard id={id.toString()} />
          <Box>
            <Box mb="5" fontWeight="bold">
              <Link href='/attributes'>
                Attributes
              </Link>
            </Box>
            <Flex direction="row" flexWrap="wrap">
              {
                Object.keys(attributes).map(attr => (
                  <AttrBox key={attr} type={attr} value={attributes[attr]} />
                ))
              }
            </Flex>
          </Box>
        </Flex>
      </Box>
    )
  } else {
    return <></>;
  }
};

export default Detail;