import { makeStyles, SnackbarContent, IconButton } from "@material-ui/core";
import { green, amber } from "@material-ui/core/colors";
import clsx from 'clsx';
import React from 'react';
import { Icon } from 'antd';

function MySnackbarContentWrapper(props) {
    const useStyles1 = makeStyles(theme => ({
        success: {
            backgroundColor: green[600],
        },
        error: {
            backgroundColor: theme.palette.error.dark,
        },
        info: {
            backgroundColor: theme.palette.primary.main,
        },
        warning: {
            backgroundColor: amber[700],
        },
        icon: {
            fontSize: 20,
        },
        iconVariant: {
            opacity: 0.9,
            marginRight: theme.spacing(1),
        },
        message: {
            display: 'flex',
            alignItems: 'center',
        },
    }));
    const classes = useStyles1();
    const { className, message, onClose, variant, ...other } = props;

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <Icon type="close-circle" />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

export default MySnackbarContentWrapper;