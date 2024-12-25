export interface CartImg {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  asset_type: string;
  likes: number;
  user: {
    name: string;
    location: string;
  };
}

export type ModalData = {
  src: string;
  alt: string;
};

export interface Data {
  // data: {
  total: number;
  total_pages: number;
  results: CartImg[];
  // };
}
