import React from 'react';
import {ColorPickerComponent} from "@syncfusion/ej2-react-inputs";
import {Header} from "../components";

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex
  document.getElementById('data-value').innerText = args.currentValue.hex
}

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Color Picker"/>
      <div className="text-center">
        <div id="preview"/>
        <div id="data-value" className="text-2xl font-semibold text-slate-900 dark:text-gray-300"/>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-picker"
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
