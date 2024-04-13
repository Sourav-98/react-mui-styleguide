import { Box, Grid, Paper, Typography, IconButton, Button } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import React, { useEffect, useState } from 'react';
import { FileUploadManagerProps } from './FileUploadManager';
import CloseIcon from '@mui/icons-material/Close';
import {
    FaFileAlt as FaFileText,
    FaFileExcel,
    FaFilePdf,
    FaFileImage
} from "react-icons/fa";

const FileCard: React.FC<{ file: File, onRemove: () => void }> = ({ file, onRemove }): JSX.Element => {
    const onPreview = () => {

    }

    return (
        <Paper elevation={2} sx={{ width: '100%', display: 'flex', p: 1 }}>
            <Box width={30} height={30} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <FaFilePdf fontSize={'24pt'} fill='#b40c00' />
            </Box>
            <Box display={'flex'} flexGrow={1} overflow={'hidden'} textOverflow={'ellipsis'}>
                <Typography variant='subtitle1' component={'span'}>{file.name}</Typography>
            </Box>
            <Box width={30} height={30} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <IconButton size='small' onClick={onRemove}>
                    <CloseIcon />
                </IconButton>
            </Box>
        </Paper>
    )
}

const FileUploadManager: React.FC<FileUploadManagerProps> = ({ maxUploadSize, files, onChange }): JSX.Element => {
    const [_files, setFiles] = useState<Array<File>>(files);
    const [_fileInput, setFileInput] = useState<string>('');

    useEffect(() => {
        onChange(_files);
    }, [_files.length]);

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    File Upload: -
                    <input
                        value={_fileInput}
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        type="file"
                        onChange={(e) => {
                            console.log(e.target.files);
                            if(e.target.files && e.target.files.item(0)){
                                const file = e.target.files.item(0);
                                if (file !== null) {
                                    setFiles(prev => [...prev, file])
                                }
                                setFileInput('')
                            }
                        }}
                    />
                    <label htmlFor="raised-button-file">
                        <IconButton size='small' component="span">
                            <AttachFileIcon/>
                        </IconButton>
                    </label>
                </Grid>
                {
                    _files.map((file, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <FileCard file={file} onRemove={() => {
                                setFiles(prev => {
                                    let newFiles = [...prev];
                                    newFiles.splice(index, 1);
                                    return newFiles;
                                });
                            }} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default FileUploadManager;