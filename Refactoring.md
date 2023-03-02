# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

### Refactored notes.
- added a separate function to getCandidateByEvent so that all the logic to get a candidate from the event can be encapsulated.
- added a separate function to getCandidate after selection from the event checks.
- added updateCrypt function to create a hash. Because this code was repeated, we can move it to a function.
- changed some if-else conditions to a single line if conditions as refactoring.
- added some test cases related to the function getCandidate so that it is well-tested.
- we can also add tests for the getCandidateByEvent function as well to validate its functionality.
