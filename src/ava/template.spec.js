/* eslint-disable no-console */
import test from "ava";
const NUMBER_OF_TESTS_PER_FILE = Number(
  process.env.NUMBER_OF_TESTS_PER_FILE || 0,
);
const ASYNC_TESTS = Boolean(process.env.ASYNC_TESTS);
const LOG_ERROR = Boolean(process.env.LOG_ERROR);
const FAIL_TESTS = Boolean(process.env.FAIL_TESTS);

{
  [...new Array(NUMBER_OF_TESTS_PER_FILE)].forEach(() => {
    if (ASYNC_TESTS) {
      asyncTest();
    } else {
      normalTest();
    }
  });

  function normalTest() {
    test(genTestTitle(), (t) => {
      if (LOG_ERROR) {
        logError();
      }

      if (FAIL_TESTS) {
        failTest(t);
      }

      var expected = 1;
      var actual = 1;
      t.deepEqual(actual, expected);
    });
  }

  function asyncTest() {
    test(genTestTitle(), async (t) => {
      await Promise.resolve();

      if (LOG_ERROR) {
        logError();
      }

      if (FAIL_TESTS) {
        failTest(t);
      }

      var expected = 1;
      var actual = 1;
      t.deepEqual(actual, expected);
    });
  }

  function genTestTitle() {
    return `should do what is expected ${Date.now()} ${Math.random()}`;
  }

  function logError() {
    try {
      throw new Error("some error occured");
    } catch (error) {
      console.error(error);
    }
  }

  function failTest(t) {
    t.fail("sorry we are failing");
  }
}
