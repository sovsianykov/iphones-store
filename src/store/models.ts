import { Phone } from '../shared/components/PhoneCard/models';

export const initialData = {
  title: 'Apple phones',
  current_page: 1,
  last_page: 3,
  phones: [
    {
      brand: 'initial',
      phone_name: 'iPhone SE (2022)',
      slug: 'apple_iphone_se_(2022)-11410',
      image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2022.jpg',
      detail:
        'https://api-mobilespecs.azharimm.site/v2/apple_iphone_se_(2022)-11410',
    },
  ],
};

export type Data = typeof initialData;

export interface InitialState {
  status: boolean;
  data: Data;
  wishList: Array<Phone>;
  searchQuery: string;
  loading: boolean;
  error: string;
}
