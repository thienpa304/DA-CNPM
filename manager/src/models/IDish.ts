import { Url } from "url";

export interface IDish {
    id: number;
    name: string;
    table: string;
    quantity: number;
    orderedAt: number;
    img: Url;
    comment?: string;
    rest: number;
    rating: number;
  }
  