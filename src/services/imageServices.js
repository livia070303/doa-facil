import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";


const s3Client = new S3Client({
    credentials: {
        accessKeyId:  import.meta.env.VITE_AWS_ACCESS_KEY_ID,
        secretAccessKey:  import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
    endpoint: "https://s3.tebi.io",
    region: "global"
});

export const uploadToS3 = async (files) => {
    const uploadPromises = files.map(async (file) => {
        const fileName = `${Date.now()}_${file.name}`; // Gera um nome único para o arquivo
        const params = {
            Bucket: 'bucket-doa-facil',
            Key: `uploads/${fileName}`,
            Body: file,
            ACL: "public-read",
        };

        const command = new PutObjectCommand(params);
        await s3Client.send(command); // Aguarda o upload ser concluído

        // Retorna um objeto com detalhes do upload
        // return {
        //     originalName: file.name,
        //     url: `https://bucket-doa-facil.s3.tebi.io/uploads/${fileName}`,
        //     size: file.size // Por exemplo, retornando o tamanho do arquivo
        // };
        return `https://bucket-doa-facil.s3.tebi.io/uploads/${fileName}`;
    });

    return await Promise.all(uploadPromises);
};
