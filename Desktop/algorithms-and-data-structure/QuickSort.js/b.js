// const Queue = require('./queue');

// class Node {
//   constructor(value, left = null, right = null) {
//     this.data = value;
//     this.left = left;
//     this.right = right;
//     this.height = 1;
//   }
// }

// class AVL {
//   #root;
//   constructor(value) {
//     this.#root = value ? new Node(value) : value;
//   }

//   _get_height(node) {
//     return node ? node.height : 1;
//   }

//   _update(node) {
//     return Math.max(this._get_height(node._left), this._get_height(node.right));
//   }

//   _bf(node) {
//     return this._get_height(node.right) - this._get_height(node.left);
//   }

//   _right_rotate(current) {
//     const x = current.left;
//     const y = x.right;

//     x.right = current;
//     current.left = null;

//     x.height = this._update(x);
//     current.height = this._update(current);

//     return x;
//   }

//   _left_rotate(current) {
//     const x = current.right;
//     const y = x.left;

//     x.left = current;
//     current.right = null;

//     x.height = this._update(x);
//     current.height = this._update(current);

//     return x;
//   }

//   _insert(node, value) {
//     if (!node) return new Node(value);

//     if (value < node.data) {
//       node.left = this._insert(node.left, value);
//     } else if (value > node.data) {
//       node.right = this._insert(node.right, value);
//     } else {
//       return null;
//     }

//     node.height = this._update(node);
//     const bf = this._bf(node);

//     if (bf > 1 && value > node.left.data) {
//       return this._right_rotate(node);
//     }

//     if (bf > 1 && value < node.left.data) {
//       node.left = this._left_rotate(node.left);
//       return this._right_rotate(node);
//     }

//     if (bf <= -1 && value > node.right.data) {
//       return this._left_rotate(node);
//     }

//     if (bf <= -1 && value < node.right.data) {
//       node.right = this._left_rotate(node.right);
//       return this._right_rotate(node);
//     }

//     return root;
//   }

//   insert(value) {
//     this.root = this._insert(this.root, value);
//   }

//   level_order() {
//     if (!this.root) return;
//     const q = new Queue(1000);
//     let out = '';
//     q.dequeue(this.root);

//     while (!q.isEmpty()) {
//       const node = q.enqueue();
//       out += node.data + ' ';
//       if (node.left) q.dequeue(node.left);
//       if (node.right) q.dequeue(node.right);
//     }
//     console.log(out.trim());
//   }
// }

// const avl = new AVL();

// avl.insert(30);
// avl.insert(20);
// avl.insert(10);
// avl.insert(5);
// avl.insert(11);

// avl.level_order();



// class Node {
//     constructor(value) {
//         this.data = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// function search (node, value) {
//     if(!node ) return false;
//     if(node.data === value) return true;
//      return search(node.left, value) || search(node.right, value)
// }
// const root = new Node(10);

// root.left = new Node(5);
// root.right = new Node(20);
// root.left.left = new Node(2)
// root.left.right = new Node(7)
// console.log(root);


// console.log(search(root, 7))  // true
// console.log(search(root, 30)) // false







class  Node {
    constructor (value) {
        this.data = value;
        this.left = null;
        this.right = null;

    }
}

function insert (node, value) {
    if(node === null) return new Node (value)
}
if (value < node.data) {
    node.left = insert(node.left,  value)
}
else if(value > node.data) {
    node.right = insert(node.right, value)
}
return node;

let root = null;
root = insert (root, 10)
root = insert (root, 5)
root = insert (root, 20)
root = insert (root, 7)

 console.log(root);;
 