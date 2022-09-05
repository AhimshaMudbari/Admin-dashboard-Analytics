import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';
import { Inject } from '@syncfusion/ej2-react-charts';

const ColorPicker = () => {
  const change = (args) => {
    document.getElementById('preview').style.backgroundColor =
      args.currentValue.hex;
  };
  return (
    <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header category="Apps" title="Color Picker" />
      <div className="text-center">
        <div id="preview"></div>
        <div className="flex flex-wrap items-center justify-center gap-20">
          <div>
            <p className="mt-2 mb-4 text-2xl font-semibold">Inline Pallet</p>
            <ColorPickerComponent
              id="inline pallet"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>

          <div>
            <p className="mt-2 mb-4 text-2xl font-semibold">Inline Pallet</p>
            <ColorPickerComponent
              id="inline pallet"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
