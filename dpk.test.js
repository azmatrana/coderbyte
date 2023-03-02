const { deterministicPartitionKey, getCandidate } = require("./dpk");
const crypto = require("crypto");


describe("deterministicPartitionKey", () => {

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the hash if event is an object", () => {
    const trivialKey = deterministicPartitionKey({hellow: 1});
    expect(trivialKey).not.toBe("0");
    expect(trivialKey.length).toBe(128);
  });

  it("Returns the hash if event is a string", () => {
    const trivialKey = deterministicPartitionKey("hello");
    expect(trivialKey).not.toBe("0");
    expect(trivialKey.length).toBe(128);
  });


  it("Returns the same value of partitionKey if event's partitionKey is a string of less than MAX_PARTITION_KEY_LENGTH", () => {
    const partitionKey = "1";
    const trivialKey = deterministicPartitionKey({partitionKey});
    expect(trivialKey).toBe(partitionKey);
  });

  it("Returns the same value of partitionKey if event's partitionKey is a string of less than MAX_PARTITION_KEY_LENGTH", () => {
    const partitionKey = crypto.randomBytes(128).toString('hex');
    const trivialKey = deterministicPartitionKey({partitionKey});
    expect(trivialKey).toBe(partitionKey);
  });

  it("Should not return the same value of partitionKey if event's partitionKey is a string of greater than MAX_PARTITION_KEY_LENGTH", () => {
    const partitionKey = crypto.randomBytes(129).toString('hex');
    const trivialKey = deterministicPartitionKey({partitionKey});
    expect(trivialKey).not.toBe(partitionKey);
  });

  it("Should not return the same value of partitionKey if event's partitionKey is a string of greater than MAX_PARTITION_KEY_LENGTH", () => {
    const partitionKey = crypto.randomBytes(129).toString('hex');
    const trivialKey = deterministicPartitionKey({partitionKey});
    expect(trivialKey).not.toBe(partitionKey);
  });

});


// test getCandidate function
describe("getCandidate", () => {

  it("Returns undefined when given no input", () => {
    const returned = getCandidate();
    expect(returned).toBe(undefined);
  });

  it("Returns same value if given data is string", () => {
    const data = "Data";
    const returned = getCandidate(data);
    expect(returned).toBe(data);
  });

  it("Returns the stringified JSON if given data is an object", () => {
    const data = {name: "Azmat"};
    const returned = getCandidate(data);
    expect(returned).toBe(JSON.stringify(data));
  });
});
