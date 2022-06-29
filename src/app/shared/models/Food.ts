export class Foods{
  id !: number;
  price!: number;
  name!: string;
  favorite: boolean= true;
  stars: number = 0;
  tags ? : string[];
  imageUrl !: string;
  cookTime !: string;
  origins! :string[]
}
