import {
  Modal, Input, DatePicker, Space, Button, Alert,
} from 'antd';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { IMeetBody } from '../../../../types/meetingTypes';
import { modalFuncHandle } from '../Feed/types';
import { modalProps, datePickerFunc } from './types';
import { actions } from '../../../../redux/slices';

const KnockingModal: React.FC<modalProps> = ({ mentorId, isModalVisible, setIsModalVisible }) => {
  const { TextArea } = Input;
  const dispatch = useAppDispatch();
  const [comment, setComment] = React.useState('');
  const currentUser = useAppSelector((state) => state.user.profile);
  const error = useAppSelector((state) => state.user.error);
  const [meetingDate, setDate] = useState(new Date());
  // срабатывает на кнопку ок в модалке
  const handleOk: modalFuncHandle = () => {
    const body: IMeetBody = {
      mentorId,
      interviewerId: currentUser.id,
      date: meetingDate,
      status: 'pending',
      comment,
    };

    dispatch(actions.writeUserMeetingPending({ payload: body }));
    setComment('');
    setIsModalVisible(false);
  };

  // срабатывает на кнопку cansel в модалке
  const handleCancel: modalFuncHandle = () => {
    setIsModalVisible(false);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  function onChange(date: any) {
    if (date) {
      setDate(date._d);
    }
  }
  return (
    <>
      {error && (
      <Alert
        banner
        message={error}
        type="error"
        closable
      />
      )}
      <Modal title="Личное сообщение ментору" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <TextArea rows={4} onChange={changeHandler} value={comment} />
        <Space direction="vertical">
          <div style={{ display: 'flex' }}>
            <p style={{ marginRight: '1rem' }}>Предложите время встречи:</p>
            <DatePicker placeholder="Выберите дату" id="datePicker" onChange={onChange} />
          </div>
        </Space>
      </Modal>
    </>
  );
};
export default KnockingModal;
