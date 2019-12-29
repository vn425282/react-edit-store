import React, { useEffect } from 'react';
import Uploader from '../../uploader/uploader';
import { DialogTitle, DialogContent, Dialog } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { useDispatch, connect } from "react-redux";
import { updateStoreInfoViaAPI } from '../../../../actions/information.action';
import { Icon } from 'antd';
import './information.scss';

function InformationDiaLog({ isOpen, handleDialogClose, storeInfo, updateLoading }) {
  // mapDispatchToProps
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [open, setOpen] = React.useState(false);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [logoURL, setlogoURL] = React.useState('');

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if(isSubmit && !updateLoading){
      setOpen(false);
      handleDialogClose();
      setIsSubmit(false);
    }
  });

  function handleClose() {
    setlogoURL(storeInfo.logoURL);
    setOpen(false);
    handleDialogClose();
  };

  function onSubmit(data) {
    storeInfo.name = data.storeName;
    storeInfo.address = data.storeAddress;
    storeInfo.district = data.storeDistrict;
    storeInfo.city = data.storeCity;
    storeInfo.phone = data.storePhone;
    if (logoURL) {
      storeInfo.logoURl = logoURL;
    }

    storeInfo.redInvoice.name = data.companyName;
    storeInfo.redInvoice.address = data.companyAddress;
    storeInfo.redInvoice.district = data.companyDistrict;
    storeInfo.redInvoice.city = data.companyCity;
    storeInfo.redInvoice.taxCode = data.companyTaxCode;

    dispatch(updateStoreInfoViaAPI(storeInfo));
    setIsSubmit(true);
  };

  function handlerURLChanged(url) {
    setlogoURL(url);
  }

  if (!storeInfo) {
    return null;
  } else {
    return (
      <>
        <div>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title" className="border-bottom"><i className="fa fa-pencil fa-2x link-icon" /> EDIT STORE PROFILE</DialogTitle>
            <DialogContent>
              <div className="container">
                <div className="row mx-md-n6">
                  <div className="col-4">
                    <Uploader storeInfo={storeInfo} onURLChanged={handlerURLChanged} />
                  </div>
                  <div className="col-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="p-3">
                        BASIC INFO.
                      <div className="form-group">
                          <label>Store Name</label>
                          <input type="text" className="form-control" placeholder="Store Name" name="storeName"
                            defaultValue={storeInfo.name} ref={register} maxLength="100" ref={register({
                              required: 'This field is required',
                            })} />
                          <label className="text-danger">{errors.storeName && errors.storeName.message}</label>
                        </div>
                        <label>Store Address</label>
                        <div className="form-inline">
                          <div className="form-group">
                            <input type="text" className="form-control address" placeholder="Store Address" name="storeAddress"
                              defaultValue={storeInfo.address} ref={register} maxLength="100" ref={register({
                                required: 'This field is required',
                              })} />
                            <label className="text-danger">{errors.storeAddress && errors.storeAddress.message}</label>
                          </div>
                          <div className="form-group">
                            <select className="form-control" name="storeDistrict" defaultValue={storeInfo.district} ref={register}>
                              <option>Dictrict Binh Thanh</option>
                              <option>Dictrict 1</option>
                              <option>Dictrict 2</option>
                              <option>Dictrict 3</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <select className="form-control" name="storeCity" defaultValue={storeInfo.coty} ref={register}>
                              <option>Ho Chi Minh</option>
                              <option>Ha Noi</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Phone #</label>
                          <input type="text" className="form-control" placeholder="Phone #" name="storePhone"
                            defaultValue={storeInfo.phone} ref={register} ref={register({
                              required: 'This field is required',
                              pattern: {
                                value: /^[0-9]*$/g,
                                message: "Invalid phone number"
                              }
                            })} />
                          <label className="text-danger">{errors.storePhone && errors.storePhone.message}</label>
                        </div>
                      </div>
                      <div className="p-3">
                        RED INVOICE INFO.
                      <div className="form-group">
                          <label>Company Name</label>
                          <input type="text" className="form-control" placeholder="Company Name" name="companyName"
                            defaultValue={storeInfo.redInvoice.name} ref={register} maxLength="100" ref={register({
                              required: 'This field is required'
                            })} />
                          <label className="text-danger">{errors.companyName && errors.companyName.message}</label>
                        </div>
                        <label>Company Address</label>
                        <div className="form-inline">
                          <div className="form-group">
                            <input type="text" className="form-control address" placeholder="Company Address"
                              name="companyAddress" defaultValue={storeInfo.redInvoice.address} maxLength="100" ref={register} ref={register({
                                required: 'This field is required'
                              })} />
                            <label className="text-danger">{errors.companyAddress && errors.companyAddress.message}</label>
                          </div>
                          <div className="form-group">
                            <select className="form-control" name="companyDistrict"
                              defaultValue={storeInfo.redInvoice.district} ref={register}>
                              <option>Dictrict Binh Thanh</option>
                              <option>Dictrict 1</option>
                              <option>Dictrict 2</option>
                              <option>Dictrict 3</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <select className="form-control" name="companyCity"
                              defaultValue={storeInfo.redInvoice.city} ref={register}>
                              <option>Ho Chi Minh</option>
                              <option>Ha Noi</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>MST</label>
                          <input type="text" className="form-control" placeholder="MST" name="companyTaxCode"
                            defaultValue={storeInfo.redInvoice.taxCode} ref={register} ref={register({
                              required: 'This field is required',
                              pattern: {
                                value: /^[a-zA-Z0-9]*$/g,
                                message: "Invalid Tax Code"
                              }
                            })} />
                          <label className="text-danger">{errors.companyTaxCode && errors.companyTaxCode.message}</label>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-success btn-block mt-3">Save <Icon type={updateLoading ? 'loading' : 'check-circle'} className="mt-1 pl-1" /></button>
                          <button type="button" className="btn btn-light btn-block" onClick={handleClose}>Cancel</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { updateLoading: state.informationReducers.updateLoading };
}

export default connect(mapStateToProps)(InformationDiaLog)
