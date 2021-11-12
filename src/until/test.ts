/**
 * arrSize：定义顺序表的空间大小
 * arr:线性表
 * index: 插入的位置
 * x：插入的元素
 */
const arrSize: number = 100
function insertList(arr: Array<any>, index: number, x: any) {
  let j: number = 0
  if (index < 1 || index > arr.length) return console.log('插入位置有误')
  if (arr.length >= arrSize) return console.log('长度溢出')
  for (j = arr.length - 1; j > index - 1; j--) {}
}
