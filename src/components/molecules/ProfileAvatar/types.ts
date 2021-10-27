export default interface IProfileAvatar {
  previewUrl: string;
  onUploadPicture: (upload: any) => void;
}

export interface ILoader {
  src: string;
  width: number;
  quality: number;
}
