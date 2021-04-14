import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/react';

type AttrSelectProps = {
  label: string,
  list: Array<string>,
  attrs: Record<string, string>,
  setAttrs: React.Dispatch<React.SetStateAction<Record<string, string>>>
}

const AttrSelect = ({ label, list, attrs, setAttrs } : AttrSelectProps) => {
  return (
    <Box width="200px">
      <Box>
        {label}
      </Box>
      <Select placeholder={`Select ${label}`} value={attrs[label]} onChange={(e: any) => {
        const tmp = JSON.parse(JSON.stringify(attrs));
        if (e.target.value) {
          tmp[label] = e.target.value;
        } else {
          delete tmp[label];
        }
        setAttrs(tmp);
      }}>
        {
          list.map(each => (
            <option key={label + each} value={each} selected={each === attrs[label]}>{each}</option>
          ))
        }
      </Select>
    </Box>
  )
}

export default AttrSelect;