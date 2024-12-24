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
