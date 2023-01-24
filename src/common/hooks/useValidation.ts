/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable guard-for-in */
/* eslint-disable default-case */
import { useEffect, useState } from 'react';

type Validations = {
  minLenght?: number;
  isContainsUppercaseLetter?: boolean,
  isContainsNumber?: boolean;
};

export const useValidation = (value: string, validations: Validations) => {
  const [minLenght, setMinLenght] = useState(false);
  const [isContainsUppercaseLetter, setIsContainsUppercaseLetter] = useState(false);
  const [isContainsNumber, setIsContainsNumber] = useState(false);

  const [isValid, setIsValid] = useState(true);

  const regNumber = /[0-9]/;
  const regLetter = /[A-Z]/;

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLenght':
          // @ts-ignore
          value.length > validations[validation] ? setMinLenght(true) : setMinLenght(false);
          break;
        case 'isContainsUppercaseLetter':
          setIsContainsUppercaseLetter(regLetter.test(value));
          break;
        case 'isContainsNumber':
          setIsContainsNumber(regNumber.test(value));
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (minLenght && isContainsUppercaseLetter && isContainsNumber) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
  }, [minLenght, isContainsUppercaseLetter, isContainsNumber]);

  return {
    minLenght,
    isContainsUppercaseLetter,
    isContainsNumber,
    isValid,
  };
};
