import punkbody from 'utils/json/punkbody.json';
import _ from 'lodash';

const type = 'trait_type', value = 'value';
export const getAttributes = (attrs: Record<string, string>) => {
  let attributes: Record<string, string[]> = {};
  const attrsKeys = Object.keys(attrs);

  for (let i = 0; i < punkbody.length; i++) {
    const attr = punkbody[i].attributes
    for (let j = 0; j < attr.length; j++) {
      if(!attrsKeys.length || attrsKeys.includes(attr[j][type])) {
        if (!attributes[attr[j][type]]) {
          attributes[attr[j][type]] = [attr[j][value]]
        } else {
          if(!attributes[attr[j][type]].includes(attr[j][value]))
          attributes[attr[j][type]].push(attr[j][value])
        }
      }
    }
  }
  for (let i = 0; i < punkbody.length; i++) {
    const attr = punkbody[i].attributes
    let count = 0;

    for (let j = 0; j < attr.length; j++) {
      if(attrsKeys.length) {
        const attrsKeys = Object.keys(attrs);
        for (let k = 0; k < attrsKeys.length; k++) {
          if (attr[j][type] === attrsKeys[k] && attr[j][value] === attrs[attrsKeys[k]]) {
            count++;
          }
        }
      }
    }

    if (count === Object.keys(attrs).length) {
      for (let j = 0; j < attr.length; j++) {
        if(attrsKeys.length && !attrsKeys.includes(attr[j][type])) {
          if (!attributes[attr[j][type]]) {
            attributes[attr[j][type]] = [attr[j][value]]
          } else {
            if(!attributes[attr[j][type]].includes(attr[j][value]))
            attributes[attr[j][type]].push(attr[j][value])
          }
        }
      }
    }
  }

  const keys = Object.keys(attributes);
  for (let i = 0; i < keys.length; i++) {
    const attr = attributes[keys[i]];
    attributes[keys[i]] = attr.sort();
  }

  return attributes;
}

export const getPunks = (attrs: Record<string, string>) => {
  if (Object.keys(attrs).length === 0) {
    return punkbody;
  }
  const punks = [];
  for (let i = 0; i < punkbody.length; i++) {
    const attr = punkbody[i].attributes
    let count = 0;

    for (let j = 0; j < attr.length; j++) {
      const attrsKeys = Object.keys(attrs);
      for (let k = 0; k < attrsKeys.length; k++) {
        if (attr[j][type] === attrsKeys[k] && attr[j][value] === attrs[attrsKeys[k]]) {
          count++;
        }
      }
    }

    if (count === Object.keys(attrs).length) {
      punks.push(punkbody[i]);
    }
  }

  return punks;
}

export const getAttributeByPunkId = (id: number) => {
  const attr = punkbody[id].attributes;
  const attributes: Record<string, string> = {};
  
  for (let i = 0; i < attr.length; i++) {
    attributes[attr[i][type]] = attr[i][value];
  }

  return attributes;
}

export const getPunkbodiesByValue = (val: string) => {
  const punks = [];

  for (let i = 0; i < punkbody.length; i++) {
    const attr = punkbody[i].attributes
    for (let j = 0; j < attr.length; j++) {
      if (attr[j][value] === val) {
        punks.push(punkbody[i]);
      }
    }
  }

  return punks;
}

export const getTypeFromValue = (val: string) => {
  const attrs = getAttributes({});
  const keys = Object.keys(attrs);

  for (let i = 0; i < keys.length; i++) {
    if (attrs[keys[i]].includes(val)) {
      return keys[i];
    }
  }

  return '';
}