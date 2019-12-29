import React, { useState } from 'react';
import { Upload, Icon } from 'antd';
import './uploader.scss';
import { Snackbar } from '@material-ui/core';
import MySnackbarContentWrapper from '../snackbar/snackbarwrapper';

function Uploader({storeInfo, onURLChanged}) {
  const imgDefault = storeInfo.logoURl;
  const [urlImage, setUrlImage] = useState(imgDefault);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [open, setOpen] = useState(false);

  const props = {
    name: 'photo',
    multiple: false,
    showUploadList: false,
    action: 'http://localhost:5000/photo',
    onChange(info) {
      const { status } = info.file;

      if (status === 'uploading') {
        setLoading(true);
      }

      if (status === 'done') {
        setUrlImage('http://localhost:5000/' + info.file.name);
        onURLChanged('http://localhost:5000/' + info.file.name);
        setSnackBar('success', 'Image uploaded successfully!');
      } else if (status === 'error') {
        setSnackBar('error', 'Image upload falied!');
      }
    },
    beforeUpload: beforeUpload
  };

  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      setSnackBar('error', 'You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      setSnackBar('error', 'Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  function handleSnackBar() {
    setLoading(false);
    setOpen(true);
  };

  function setSnackBar(type, message){
    setType(type);
    setSnackbarMessage(message);
    handleSnackBar();
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  function removeImage(){
    const urlDefault = 'https://seeba.se/wp-content/themes/consultix/images/no-image-found-360x260.png';
    onURLChanged(urlDefault);
    setUrlImage(urlDefault);
    return false;
  }
  
  return (
    <>
      <div className="p-3">
        <div className="row info_title_info">
          <p>STORE IMAGE</p><Icon type={loading ? 'loading' : 'check-circle'} className="mt-1 pl-1" />
          <div className="row">
            <img className="info_img" src={urlImage} alt="Information"></img>
          </div>
          <div className="row upload_button_group">
            <div className="link-info">
              <a onClick={removeImage}>Remove</a>
            </div>
            <div>
              <Upload {...props}>
                <input type="button" className="btn btn-secondary btn-custom-info bg-light" value="Upload Image"></input>
              </Upload>
              <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <MySnackbarContentWrapper
                  onClose={handleClose}
                  variant={type}
                  message={snackbarMessage}
                />
              </Snackbar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Uploader;
