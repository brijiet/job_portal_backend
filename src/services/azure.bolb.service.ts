import 'dotenv/config';
import { blobServiceClient } from '../config/azureConfig';
type AzureFileParams = {
    fileName: string;
    containerName: string;
    buffer: Buffer;
    size: number;
};

type AzureParams = {
    fileName: string;
    containerName: string;
}

export const uploadFileToAzureBlobStorage = async (params: AzureFileParams) => {

    try {
        // console.log('file data in service ', params)
        const containterClient = blobServiceClient.getContainerClient(params.containerName);
        const blobBlockClient = containterClient.getBlockBlobClient(params.fileName);
        await blobBlockClient.upload(params.buffer, params.size);
        return;

    } catch (error) {
        console.log('error in uploadFileToAzureBlobStorage ', error);
        throw error;
    }
};

export const getAzureBlob = async (params: AzureParams) => {
    try {

        const containterClient = blobServiceClient.getContainerClient(params.containerName);
        const blockBlobClient = containterClient.getBlockBlobClient(params.fileName);
        const downloadedFile = await blockBlobClient.download();
        return downloadedFile;

    } catch (error) {
        console.log('error in getAzureBlob ', error);
        throw error;
    }
};

export const deleteAzureBlob = async (params: AzureParams) => {
    try {
      
        const containterClient = blobServiceClient.getContainerClient(params.containerName);
        const blockblobClient = containterClient.getBlockBlobClient(params.fileName);
        const deleteblob = await blockblobClient.delete();

        return deleteblob;

    } catch (error) {
        console.log('error in deleteAzureBlob ', error);
        throw error;
    }
}