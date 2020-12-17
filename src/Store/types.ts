export type ISAstr = {
  profile_image: string;
  [key: string]: string | number;
} | null;

export enum RequestState {
  PENDING = "pending",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type IAstr = {
  id: number;
  url: string;
  name: string;
  status: {
    id: number;
    name: string;
  };
  type: {
    id: number;
    name: string;
  };
  date_of_birth: string;
  date_of_death: null | string;
  nationality: string;
  bio: string;
  twitter: null | string;
  instagram: null | string;
  wiki: null | string;
  agency: { [key: string]: string | number | boolean };
  profile_image: string;
  profile_image_thumbnail: string;
  last_flight: string;
  first_flight: string;
};

export type IList = {
  data: IAstr[];
  requestState: RequestState;
};
