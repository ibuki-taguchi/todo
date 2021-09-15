"use strict";
const todo = require("./index.js");
const assert = require("assert");

// addとlistのテスト
todo.add("ノートを買う");
todo.add("鉛筆を買う");
assert.deepStrictEqual(todo.list(), ["ノートを買う", "鉛筆を買う"]);

// doneとdonelistのテスト
todo.done("鉛筆を買う");
assert.deepStrictEqual(todo.list(), ["ノートを買う"]);
assert.deepStrictEqual(todo.doneList(), ["鉛筆を買う"]);

// delのテスト
todo.del("ノートを買う");
todo.del("鉛筆を買う");
assert.deepStrictEqual(todo.list(), []);
assert.deepStrictEqual(todo.doneList(), []);

console.log("test done");
