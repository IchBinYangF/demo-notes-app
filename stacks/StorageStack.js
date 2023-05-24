import { Bucket, Table } from "sst/constructs";

//DynamoDB and S3
export function StorageStack({ stack, app }) {
  // Create the DynamoDB table
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });
  
  // Create an S3 bucket
  const bucket = new Bucket(stack, "Uploads");

  return {//allow reference this resource in our other stacks.
    table,
    bucket,
  };
  
}