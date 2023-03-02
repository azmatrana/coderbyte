/*
Refactored notes.

- added a separate function to getCandidateByEvent so that all the logic to get a candidate from the event can be encapsulated.
- added a separate function to getCandidate after selection from the event checks.
- added updateCrypt function to create a hash. Because this code was repeated, we can move it to a function.
- changed some if-else conditions to a single line if conditions as refactoring.
- added some test cases related to the function getCandidate so that it is well-tested.
- we can also add tests for the getCandidateByEvent function as well to validate its functionality.
*/

const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) candidate = getCandidateByEvent(event);

  candidate = getCandidate(candidate) || TRIVIAL_PARTITION_KEY; // default value of cadidate will be assigned as TRIVIAL_PARTITION_KEY.

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) candidate = updateCrypt(candidate);

  return candidate;
};

function getCandidateByEvent(event){
  if (event.partitionKey) {
    candidate = event.partitionKey;
  } else {
    const data = JSON.stringify(event);
    candidate = updateCrypt(data); 
  }

  return candidate;
}


function getCandidate(data)
{
  if (data && typeof data !== "string")
      data = JSON.stringify(data);
  return data;
}

function updateCrypt(data){
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

exports.getCandidate = getCandidate;
