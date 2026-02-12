import { MouseEventHandler } from "react";

export type AnimeProp= {
  id: string;
  name: string;
  image: {
    original: string;
    preview?: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
  status: string
}

export type Prop ={
  anime: AnimeProp;
  index: number;
}

export type CustomButtonProps= {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export type CustomDialogProps={
  isOpen: boolean;
  closeModal: () => void;
  title: string;
}