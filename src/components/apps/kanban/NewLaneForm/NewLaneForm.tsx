import React from 'react';
import { Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import * as S from './NewLaneForm.styles';

interface NewLaneFormProps {
  onAdd: (values: { id: string | number; session_title: string }) => void;
  onCancel: () => void;
}

export const NewLaneForm: React.FC<NewLaneFormProps> = ({ onAdd, onCancel }) => {
  const { t } = useTranslation();
  const handleSubmit = (values: { title: string }) => {
    onAdd({
      id: uuidv4(),
      session_title: values.title || t('kanban.unnamedLabel'),
    });
  };

  return (
    <S.Form
      name="addCard"
      isFieldsChanged
      footer={<S.FooterButtons size="small" onCancel={onCancel} />}
      onFinish={handleSubmit}
    >
      <S.FormInput name={'title'}>
        <Input placeholder={t('kanban.title')} bordered={false} />
      </S.FormInput>
    </S.Form>
  );
};