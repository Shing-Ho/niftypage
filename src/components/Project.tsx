import React from 'react';
import { Box, Link } from "@chakra-ui/layout";
import Image from "next/image";

type ProjectProps = {
  src: string;
  text: string;
}

const Project = ({ src, text }: ProjectProps) => {
  return (
    <Box mb={8} w="300px">
      <Link href="/attributes">
        <Image src={src} title={text} width="full" height="350" objectFit="cover" />
      </Link>
    </Box>
  )
}

export default Project;