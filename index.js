"use strict";

// { name: タスクの文字列, state: 完了しているかどうかの真偽値 }
const taskManageArray = [];

/**
 * タスクの追加
 *
 * @param {string} taskName
 */

function add(taskName) {
  taskManageArray.push({ name: taskName, state: false });
}

/**
 *
 * タスクを完了にする
 * @param {string} taskName
 */

function done(taskName) {
  const indexFound = taskManageArray.findIndex(
    (task) => task.name === taskName
  );
  if (indexFound !== -1) {
    taskManageArray[indexFound].state = true;
  }
}

/**
 *
 * タスクを削除
 * @param {string} taskName
 */
function del(taskName) {
  const indexFound = taskManageArray.findIndex(
    (task) => task.name === taskName
  );
  if (indexFound !== -1) {
    taskManageArray.splice(indexFound, 1);
  }
}

/**
 *
 * 未完了のタスクを返す
 * @return 未完了のtaskName
 */
function list() {
  return taskManageArray.filter((task) => !task.state).map((task) => task.name);
}

/**
 *
 * 完了のタスクを返す
 * @return 未完了のtaskName
 */
function doneList() {
  return taskManageArray.filter((task) => task.state).map((task) => task.name);
}

module.exports = {
  add: add,
  list: list,
  done: done,
  doneList: doneList,
  del: del,
};
