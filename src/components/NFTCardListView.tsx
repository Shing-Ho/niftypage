import React, { useEffect, useState, useRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Pagination, { ReactJsPaginationProps } from 'react-js-pagination';
import { debounce } from "lodash";

import NFTCard from './NFTCard';

type NFTCardListViewProps = {
  punks: Array<any>
}

enum Breakpoints {
  XSM = 0,
  SM = 1,
  MD = 2,
  LG = 3,
  XL = 4,
}

const NFTCardListView = ({ punks }: NFTCardListViewProps) => {
  const [activePage, setActivePage] = useState(1);
  const [innerWidth, setInnerWidth] = useState(0);

  const onPageChanged = (page: number) => {
    setActivePage(page);
  }

  const getPageNavigatedPunks = () => {
    const ids = [];
    for (let i = (activePage - 1)  * 9; i < Math.min((activePage) * 9, punks.length); i++) {
      if (punks[i]) {
        ids.push(punks[i].id);
      }
    }
    return ids;
  }

  const GetPaginationSetting = (breakpoint: Breakpoints) => {
    return {
      hideFirstLastPages: breakpoint < 1,
      itemClass: `btn is-fillin border-left border-right border-primary border-top is-primary ${breakpoint < 1 ? "is-sm" : ""}`,
      pageRangeDisplayed: breakpoint < 1 ? 4 : breakpoint <= 2 ? 5 : 7
    };
  }
  
  const Breakpoint = (): Breakpoints => (innerWidth > 1200 ? Breakpoints.XL : innerWidth > 992 ? Breakpoints.LG : innerWidth > 768 ? Breakpoints.MD : innerWidth > 576 ? Breakpoints.SM : Breakpoints.XSM);
  const [paginationOption, setPaginationOption] = useState<Partial<ReactJsPaginationProps>>(GetPaginationSetting(Breakpoint()));
  const ref = useRef<{ breakpoint: Breakpoints }>({ breakpoint: Breakpoint() });

  function UpdatePagination() {
    const breakpoint = Breakpoint();
    if (breakpoint !== ref.current.breakpoint) {
      ref.current.breakpoint = breakpoint;
      setPaginationOption(GetPaginationSetting(breakpoint));
    }
  }

  useEffect(() => {
    UpdatePagination();
    setInnerWidth(window.innerWidth);
    window.addEventListener("resize", debounce(UpdatePagination, 500));
    return () => window.removeEventListener("resize", debounce(UpdatePagination, 500));
  }, []);
  return (
    <Box>
      <Flex flexWrap="wrap" justifyContent="space-between">
        {
          getPageNavigatedPunks().length ? (
            getPageNavigatedPunks().map(punkId => (
              <NFTCard key={punkId} id={punkId} />
            ))
          ) : (
            <Box textAlign="center" width="full">
              There is no NFT that matches your criteria.
            </Box>
          )
        }
      </Flex>
      <Box mt="8">
        <Pagination
          {...paginationOption}
          firstPageText="First"
          lastPageText="Last"
          prevPageText="<"
          nextPageText=">"
          innerClass="mt-5 group justify-center"
          activePage={activePage}
          itemsCountPerPage={9}
          totalItemsCount={punks.length}
          pageRangeDisplayed={5}
          onChange={onPageChanged}
        />
      </Box>
    </Box>
  )
}

export default NFTCardListView;