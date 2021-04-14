import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/layout';

import { getAttributes, getPunks } from 'utils/helpers';
import AttrSelect from 'components/AttrSelect';
import NFTCardListView from 'components/NFTCardListView';


const Attributes = () => {
  const [attrs, setAttrs] = useState<Record<string, string>>({});
  const attrList = getAttributes(attrs);

  const punks = getPunks(attrs);
  
  return (
    <Box mb="8" w="full">
      <Box w="full" >
        <Flex flexWrap="wrap" justifyContent="space-between">
          {
            Object.keys(attrList).map(attrKey => (
              <Box mb="3">
                <AttrSelect label={attrKey} list={attrList[attrKey]} attrs={attrs} setAttrs={setAttrs} />
              </Box>
            ))
          }
        </Flex>
      </Box>
      <Box w="full" mt="8">
        <NFTCardListView punks={punks} />
      </Box>
    </Box>
  )
}

export default Attributes;