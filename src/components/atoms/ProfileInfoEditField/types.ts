import React from 'react';
export default interface IProfileInfoEditField {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  multiline?: boolean;
  value: any;
  onChange: React.ChangeEventHandler;
  error: boolean;
  onBlur: React.FocusEventHandler;
  helperText: React.ReactNode;
}
