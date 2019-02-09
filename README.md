# Test Framework Speed Comparison

## install

```bash
npm i
```

## generate test files

```bash
node src/index.js
```

The number of tests file to be generated can be set with an env var **NUMBER_OF_TEST_FILES**.

```bash
NUMBER_OF_TEST_FILES=10 node src/index.js
```

**NOTE**: that running this command will always clear the **tests** folder.

## run tests

```bash
npm run test:ava
npm run test:jest
npm run test:mocha
npm run test:mochawp
```

The scripts sets the **NUMBER_OF_TESTS_PER_FILE** env var to set how many test should be generated in a single test file.

You can run the above test scripts with **:error**, **:fail**, **:async**, **:watch** modifiers:

```bash
# this will log an error via console.error in every test
npm run test:mocha:error

# this will fail every test
npm run test:mocha:fail

# this will run every test as async
npm run test:mocha:async

# this will start the test framework in watch mode
npm run test:mocha:watch
```

## measuring the runtime of the test scripts

```bash
time npm run test:mocha

# the above will print the following where the `real` measurement is of interest
real    0m2.608s
user    0m0.045s
sys     0m0.167s
```

## results (Core i7 3770 4 cores/8 thread)

| 100 file * 7 test | normal |  error |     fail |
| ----------------: | -----: | -----: | -------: |
|           **AVA** | 19.18s | 21.69s |   22.92s |
|          **Jest** | 12.97s | 15.04s | 1m15.22s |
| **Jest: silent*** | 12.33s | 13.81s |   13.06s |
|   **Jest: node*** | 11.20s | 13.37s |        - |
|         **Mocha** |  3.10s |  6.00s |    5.18s |
| **Mocha-Webpack** |  4.54s | 25.42s |   24.88s |

**NOTE:** *Jest: silent* means that we used **jest-silent-reporter**

**NOTE:** *Jest: node* means that we set the test env to **node**
