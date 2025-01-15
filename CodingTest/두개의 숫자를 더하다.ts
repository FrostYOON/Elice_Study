class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let resultNode = new ListNode();
  let cur = resultNode;
  let plusNum = 0;

  while (l1 !== null || l2 !== null || plusNum > 0) {
      const val1 = l1 !== null ? l1.val : 0;
      const val2 = l2 !== null ? l2.val : 0;

      const sum = val1 + val2 + plusNum;
      plusNum = Math.floor(sum / 10);
      cur.next = new ListNode(sum % 10);
      if (l1 !== null) {
          l1 = l1.next;
      }
      if (l2 !== null) {
          l2 = l2.next;
      }
      cur = cur.next
  }

  return resultNode.next

  // if (!l1 || !l2) {
  //     return null;
  // }

  // let tempArr1:number[] = [];
  // let tempArr2:number[] = [];

  // while(l1) {
  //     tempArr1.push(l1.val)
  //     l1 = l1.next;
  // }
  // while(l2) {
  //     tempArr2.push(l2.val)
  //     l2 = l2.next;
  // }

  // const num: BigInt = BigInt(tempArr1.reverse().join('')) + BigInt(tempArr2.reverse().join(''));

  // const result: string = num.toString()
  // let resultNode: ListNode | null = null;

  // for (let i = 0; i < result.length; i++) {
  //     resultNode = new ListNode(+result.charAt(i), resultNode)
  // }
  // return resultNode
};