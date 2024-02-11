import React from 'react';
import { Box, Button, ButtonProps, CircularProgress } from '@mui/material';

/**
* An extension of MUi Button with a submit/loading indicator.
* @param isSubmitting if set to `true`, a `CircularProgress` will be displayed
* @returns
*/
const SubmitButton: React.FC<ButtonProps & { isSubmitting: boolean }> = ({
    isSubmitting,
    children,
    ...buttonProps
}): JSX.Element => {
    return (
        <Button {...buttonProps}>
            {isSubmitting ? (
                <Box display='flex' margin='0 12.6px'>
                    <CircularProgress size={24} color='inherit' />
                </Box>
            ) : (
                children
            )}
        </Button>
    );
};

export default SubmitButton;