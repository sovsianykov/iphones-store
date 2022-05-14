export interface Specification  {
  title: string;
  specs: { key: string; val: Array<string> };
};
export interface PhoneDetailData {
    brand: string;
    phone_name: string;
    thumbnail: string;
    phone_images: Array<string>;
    release_date: string;
    dimension: string;
    os: string;
    storage: string;
    specifications: Specification[];
}

export interface PhoneDetailState {
    status: boolean;
    data: PhoneDetailData | {};
    loading: boolean;
    error: string;
}