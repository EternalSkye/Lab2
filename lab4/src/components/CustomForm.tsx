import { Form, Input, Select, Checkbox, Button } from 'antd';
import { useState } from 'react';
import './CustomForm.css';

const { Option } = Select;

export function CustomForm() {
  const [nick, setNick] = useState('');
  const [phone, setPhone] = useState('');


  const onSubmit = (values: any) => {
    console.log(values);
    alert(`${nick} ${phone} `);
  };

  return (
    <Form
      style={{ width: '30%', margin: '0 auto' }}
      onFinish={onSubmit}
      scrollToFirstError
    >
      <Form.Item
        name="Имя"
        label="Имя"
        rules={[
          {
            required: true,
            message: 'Обязательное поле',
            whitespace: true,
          },
        ]}
      >
        <Input onChange={(e) => setNick(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="Пароль"
        label="Пароль"
        rules={[{ required: true, message: 'Обязательное поле' }]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="Подтвердите"
        label="Подтвердите пароль"
        dependencies={['Пароль']}
        hasFeedback
        rules={[
          { required: true, message: 'Обязательное поле' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('Пароль') === value) {
                return Promise.resolve();
              }

              return Promise.reject(

              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="email"
        label="Почта"
        rules={[
          { type: 'email', message: 'Неверный формат почты' },
          { required: true, message: 'Обязательное поле!' },
        ]}
      >
        <Input onChange={(e) => setPhone(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Номер телефона"
        rules={[{ required: true, message: 'Обязательное поле!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="Comment"
        label="Комментарий"
        rules={[{ message: 'Ваш комментарий' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>



      <Form.Item


      >

      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
}
