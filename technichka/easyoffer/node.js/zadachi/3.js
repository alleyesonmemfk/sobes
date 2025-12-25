Дана структура бинарного дерева в виде объекта.Необходимо реализовать функцию, которая рекурсивно обходит дерево и возвращает сумму всех значений value

const binnaryTree = {
  value: 6,
  left: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1
      }
    },
    right: {
      value: 7
    }
  },
  right: {
    value: 10,
    left: {
      value: 4
    },
    right: {
      value: 5
    }
  }
}