export type FileUploadManagerProps = {
    enableUpload?: boolean;
    maxUploadSize: number;
    files: Array<File>;
    onChange: (_: Array<File>) => void;
}