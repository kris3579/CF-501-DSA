'use stric';

const buildPermutationsTree = (root, str, indicies) => {
  let branchCounter = 0;

  for (let i = 0; i < str.length; i++) {
    if (indicies.includes(str.charAt(i)) === false) {
      const branchName = `b${branchCounter}`;
      root[branchName] = new Node(str.charAt(i));
      branchCounter += 1;
    }

    if (i === str.length) {
      branchCounter = 0;
    }
  }

  // permutations = buildPermutationsTree();
};

const findAllPermutations = (str) => {
  let foundPermutations = [];

  for (let i = 0; i < str.length; i++) {
    const newPermutationsTree = new TreeWalker(str.charAt(i));

    const permuationsStartWithChar = buildPermutationsTree(newPermutationsTree.root, str, [i]);

    foundPermutations = [...foundPermutations, ...permuationsStartWithChar];
  }

  return foundPermutations;
};

module.exports = findAllPermutations;
