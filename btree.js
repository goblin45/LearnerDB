class BTreeNode {

    constructor(isLeaf = false, attributes = {}) {
        this.isLeaf = isLeaf
        this.keys = []
        this.children = []
        this.attributes = attributes
    }

}

class BTree {

    constructor(order, attributes = {}) {
        this.order = order
        this.root = new BTreeNode(true, attributes)
    }

    insert(key) {
        // Logic to insert a key into the tree
    }

    delete(key) {
        // Logic to delete a key from the tree
    }

    search(key) {
        // Logic to search for a key in the tree
    }
}