interface User<T> {
  name: string;
  age: number;
  key: T; // key could be any datatype
}

function abcd(obj: User<string>) {}

abcd({ name: "Ayu", age: 21, key: "kljsdfgh" });
