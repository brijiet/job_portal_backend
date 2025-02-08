import 'dotenv/config';
import { ServiceBusClient } from '@azure/service-bus';
import { BlobServiceClient,StorageSharedKeyCredential } from '@azure/storage-blob';

const AzureConnectionString = process.env.AZURE_CONNCTION_STRING as string;
const azureMessageQueue= process.env.AZURE_QUEUE_NAME as string
export const serviceBusClient = new ServiceBusClient(AzureConnectionString);

//config for storage blob
const storageAccountName = process.env.AZURE_STORAGE_ACCOUNT_NAME as string;
const storageAccountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY as string;
const storageSharedKeyCredential = new StorageSharedKeyCredential(storageAccountName,storageAccountKey);
export const blobServiceClient = new BlobServiceClient(`https://${storageAccountName}.blob.core.windows.net`,storageSharedKeyCredential);

