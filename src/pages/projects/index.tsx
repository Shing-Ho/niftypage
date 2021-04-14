import { Box } from "@chakra-ui/layout";

import Project from "components/Project";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <Box mt={12} w="full">
        <Box fontSize="x-large" fontWeight="bold">
          Projects
        </Box>
        <Box mt={30}>
          <Project src="/images/punkbody.png" text="PunkBody" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
