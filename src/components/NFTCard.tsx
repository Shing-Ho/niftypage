import React from 'react';
import { Box, Button, Link } from '@chakra-ui/react';
import Image from "next/image";

type NFTCardProps = {
  id: number | string,
}

const NFTCard = ({ id }: NFTCardProps) => {
  const image = `https://api.punkbodies.com/get-images/upscaled/${id.toString().padStart(4, '0')}.png`;
  const label = `Punkbody #${id}`;
  
  return (
    <Link href={`/detail/${id}`}>
      <Box width="200px">
        <Image src={image} title={label} width="full" height="200" />
        <Box textAlign="center">
          {`PunkBody #${id.toString().padStart(4, '0')}`}
        </Box>
      </Box>
    </Link>
  )
}

export default NFTCard;