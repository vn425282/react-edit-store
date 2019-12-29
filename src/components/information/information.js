import React, { useState, useEffect } from 'react';
import './information.scss';
import InformationDiaLog from '../common/dialog/information/information';
import { getStoreInfoViaAPI } from '../../actions/information.action';
import { useDispatch, connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { message } from 'antd';

function Information({ storeInfo, loading }) {
  // mapDispatchToProps
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    dispatch(getStoreInfoViaAPI());
  }, [dispatch]);

  return loading ? <Loader type="TailSpin" /> : (
    <div className="col-5">
      <div className="p-3 border">
        <img className="home_img" src={storeInfo ? storeInfo.logoURl : ''} alt="home" />
        <div className="row home_title_info">
          <p>STORE INFO.</p>
        </div>
        <div className="row p-1">
          <div className="col-5 home_text_title">
            Name:
          </div>
          <div className="col-7 home_text_content">
            {storeInfo ? storeInfo.name : ''}
          </div>
        </div>
        <div className="row p-1">
          <div className="col-5 home_text_title">
            Address:
          </div>
          <div className="col-7 home_text_content">
            {storeInfo ? makeAddressTotal(storeInfo): ''}
          </div>
        </div>
        <div className="row p-1">
          <div className="col-5 home_text_title">
            Phone #:
          </div>
          <div className="col-7 home_text_content">
            {storeInfo ? storeInfo.phone : ''}
          </div>
        </div>
        <div className="row home_title_info">
          <p>RED INVOICE INFO.</p>
        </div>
        <div className="row p-1">
          <div className="col-5 home_text_title">
            Company Name:
          </div>
          <div className="col-7 home_text_content">
            {storeInfo ? storeInfo.redInvoice.name : ''}
          </div>
        </div>
        <div className="row p-1">
          <div className="col-5 home_text_title">
            Address:
          </div>
          <div className="col-7 home_text_content">
            {storeInfo ? makeAddressTotal(storeInfo.redInvoice) : ''}
          </div>
        </div>
        <div className="row p-1">
          <div className="col-5 home_text_title">
            MST:
          </div>
          <div className="col-7 home_text_content">
            {storeInfo ? storeInfo.redInvoice.taxCode : ''}
          </div>
        </div>
        <input type="button" className="btn btn-secondary btn-custom bg-light" value="Edit Profile" onClick={() => handleClickOpen()} disabled={!storeInfo} />
        <InformationDiaLog isOpen={isOpen} handleDialogClose={handleDialogClose} storeInfo={storeInfo} />
      </div>
    </div>
  );

  function handleClickOpen() {
    setIsOpen(true);
  }

  function handleDialogClose() {
    setIsOpen(false);
  }


  function makeAddressTotal(obj) {
    return obj.address + ', ' + obj.district + ', ' + obj.city;
  }
}

function mapStateToProps(state) {
  if (state.informationReducers.error) {
    message.error('Loading data error ! Please try to reload this browser or start the Upload Server');
  }

  return { storeInfo: state.informationReducers.store, loading: state.informationReducers.loading };
}

export default connect(mapStateToProps)(Information);
