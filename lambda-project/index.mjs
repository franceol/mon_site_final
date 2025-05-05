import AWS from "aws-sdk";

const s3 = new AWS.S3();

export const handler = async (event) => {
    try {
        // Récupérer le nom du fichier depuis la requête
        const fileKey = event.queryStringParameters.fileKey;

        if (!fileKey) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "fileKey est requis" }),
            };
        }

        // Générer une URL signée pour télécharger l'objet
        const signedUrl = s3.getSignedUrl("getObject", {
            Bucket: "photosola",  // Remplace par le nom de ton bucket S3
            Key: fileKey,
            Expires: 60 * 60, // Expire en 5 minutes
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ url: signedUrl }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
