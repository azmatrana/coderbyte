const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) candidate = getCandidateByEvent(event);

  candidate = getCandidate(candidate) || TRIVIAL_PARTITION_KEY

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
