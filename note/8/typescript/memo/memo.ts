type CustomType<T> = {
  val: T;
};
const strObj: CustomType<string> = { val: 1 };
console.log(strObj)
