/// <reference types="react-scripts" />
/*
* P -> Props
* S -> Styles
* I -> Interfaces
*/

declare interface PFood {
  available: boolean;
  food: TFood;
  handleDelete: (id: number) => void;
  handleEditFood: (food: TFood) => void;
};

declare type SFood = {
  available: boolean;
};

declare interface PHeader {
  openModal: () => void;
}

declare interface PModal {
  isOpen: boolean;
  setIsOpen: () => void;
  children: JSX.Element;
};

declare type SModalForm = {
  ref: import("react").Ref;
};

declare interface PModalEditFood {
  setIsOpen: () => void;
  isOpen: boolean;
  editingFood: TFood;
  handleUpdateFood: (data: TFormEditFoodData) => void;
};

declare interface PModalAddFood {
  setIsOpen: () => void;
  isOpen: boolean;
  handleAddFood: (data: TFormEditFoodData) => void;
};

declare interface PInput extends import("react").HTMLAttributes<HTMLInputElement> {
  Icon?: import("react-icons").IconType;
  name: string;
  placeholder: string;
};

declare type SInput = {
  isFocused: boolean;
  isFilled: boolean;
};

declare type TFood = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  available: boolean;
};

