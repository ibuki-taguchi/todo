"use strict";

// { name: タスクの文字列, state: 完了しているかどうかの真偽値 }
let taskManageArray = [];
const fs = require("fs");
const filename = "./tasks.json";

// ファイル読み込み
try {
  const data = fs.readFileSync(filename, "utf8");
  taskManageArray = JSON.parse(data);
} catch (ignore) {
  console.log(filename + "から復元できませんでした");
}
/**
 *
 * ファイル書き出し
 */
function saveTasks() {
  fs.writeFileSync(filename, JSON.stringify(taskManageArray), "utf8");
}

/**
 * タスクの追加
 *
 * @param {string} taskName
 */

function add(taskName) {
  taskManageArray.push({ name: taskName, state: false });
  saveTasks();
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
    saveTasks();
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
    saveTasks();
  }
}

/**
 *
 * @param {object} task
 * @returns {boolean} 完了したかどうか
 */
function isDone(task) {
  return task.state;
}

/**
 *
 * @param {object} task
 * @returns {boolean} 未完了かどうか
 */
function isNotDone(task) {
  return !isDone(task);
}

/**
 *
 * 未完了のタスクを返す
 * @return {array} 未完了のtaskName
 */
function list() {
  return taskManageArray.filter(isNotDone).map((task) => task.name);
}

/**
 *
 * 完了のタスクを返す
 * @return {string} 未完了のtaskName
 */
function doneList() {
  return taskManageArray.filter(isDone).map((task) => task.name);
}

module.exports = {
  add: add,
  list: list,
  done: done,
  doneList: doneList,
  del: del,
};
