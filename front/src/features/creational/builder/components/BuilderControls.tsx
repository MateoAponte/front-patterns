import React, { useEffect } from 'react';
import { Column } from '../../../common/components/Column.tsx';
import Select, { ActionMeta, OnChangeValue } from 'react-select';
import { PTRow } from '../../../common/components/PTRow.tsx';
import { Text } from '../../../common/components/Text.tsx';
import { TextField } from '../../../common/components/TextField.tsx';
import { INPUT_TYPES } from '../../../common/constants/TextFields.ts';
import { Divider } from '../../../common/components/Divider.tsx';
import { PTButton } from '../../../common/components/Button.tsx';
import FormManagement from '../helpers/FormManagement.ts';
import { FormElementType } from '../constants/FormTypes.ts';
import Observer from '../helpers/Observer.ts';
import { FormElementOptions } from '../types/FormElement.ts';
import { MdInput, MdOutlineSmartButton } from 'react-icons/md';
import { BsTextareaResize } from 'react-icons/bs';

interface ColourOption {
  value: string;
  label: string;
}

const options = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
];

export const BuilderControls: React.FC = () => {
  const [widthModel, setWidthModel] = React.useState('0');
  const [colorModel, setColorModel] = React.useState<ColourOption>(options[0]);
  const [paddingModel, setPaddingModel] = React.useState('0');
  const [nameModel, setNameModel] = React.useState('');

  const onChange = (newValue: ColourOption) => {
    setColorModel(newValue);
  };

  const getOptions = (): FormElementOptions => ({
    color: colorModel.value,
    width: widthModel + 'px',
    padding: paddingModel + 'px',
    name: nameModel,
  });

  const buildElement = (type, isCustom) => {
    if (
      !!widthModel &&
      widthModel !== '0' &&
      !!paddingModel &&
      paddingModel !== '0' &&
      !!nameModel
    ) {
      FormManagement.setFactoryType(nameModel, type);
      !isCustom
        ? FormManagement.addElement()
        : FormManagement.addElement(true, getOptions());
      Observer.notifyObservers();
    }
  };

  const addTextArea = (isCustom) => {
    buildElement(FormElementType.TEXT_AREA, isCustom);
  };
  const addTextField = (isCustom) => {
    buildElement(FormElementType.INPUT, isCustom);
  };
  const addButton = (isCustom) => {
    buildElement(FormElementType.BUTTON, isCustom);
  };

  return (
    <>
      <Column>
        <PTRow perRow="1-item">
          <Text isBolder tag="label" text="Name: " type="common" forId="name" />
          <TextField
            id="name"
            type={INPUT_TYPES.TEXT}
            input={nameModel}
            setInput={(evt) => setNameModel(evt)}
          />
        </PTRow>
        <Divider orientation="horizontal" small />
        <PTRow perRow="1-item">
          <Text
            isBolder
            tag="label"
            text="Width: "
            type="common"
            forId="width"
          />
          <TextField
            id="width"
            type={INPUT_TYPES.NUMBER}
            input={widthModel.toString()}
            setInput={(evt) => setWidthModel(evt)}
          />
        </PTRow>
        <Divider orientation="horizontal" small />
        <PTRow perRow="1-item">
          <Text
            isBolder
            tag="label"
            text="Padding: "
            type="common"
            forId="width"
          />
          <TextField
            id="width"
            type={INPUT_TYPES.NUMBER}
            input={paddingModel.toString()}
            setInput={(evt) => setPaddingModel(evt)}
          />
        </PTRow>
        <Divider orientation="horizontal" small />
        <PTRow perRow="1-item">
          <Text isBolder tag="label" text="Color: " type="common" forId="" />
          <Select options={options} value={colorModel} onChange={onChange} />
        </PTRow>
        <Divider orientation="horizontal" small />
        <Column>
          <Text
            isBolder
            tag="label"
            text="Custom Building: "
            type="common"
            forId=""
          />
          <PTRow perRow="3-item">
            <PTButton
              icon={<BsTextareaResize />}
              onClick={() => addTextArea(true)}
            >
              Text Area
            </PTButton>
            <PTButton icon={<MdInput />} onClick={() => addTextField(true)}>
              Text Field
            </PTButton>
            <PTButton
              icon={<MdOutlineSmartButton />}
              onClick={() => addButton(true)}
            >
              Button
            </PTButton>
          </PTRow>
        </Column>
        <Divider orientation="horizontal" small show />
        <Column>
          <Text
            isBolder
            tag="label"
            text="Default Builders: "
            type="common"
            forId=""
          />
          <PTRow perRow="3-item">
            <PTButton
              icon={<BsTextareaResize />}
              onClick={() => addTextArea(false)}
            >
              Text Area
            </PTButton>
            <PTButton icon={<MdInput />} onClick={() => addTextField(false)}>
              Text Field
            </PTButton>
            <PTButton
              icon={<MdOutlineSmartButton />}
              onClick={() => addButton(false)}
            >
              Button
            </PTButton>
          </PTRow>
        </Column>
      </Column>
    </>
  );
};
