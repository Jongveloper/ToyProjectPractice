import { render } from '@testing-library/react';

import Form from '.';

describe('Form', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const renderForm = () => {
    return render(
      <Form
        handleChange={handleChange}
        handleClick={handleClick}
        taskTitle=""
      />
    );
  };

  it('input이 렌더링됩니다.', () => {
    const { getByPlaceholderText } = renderForm();

    expect(getByPlaceholderText('할 일을 입력하세요')).not.toBeNull();
  });

  it('button이 렌더링 됩니다.', () => {
    const { getByRole } = renderForm();

    expect(getByRole('button')).not.toBeNull();
  });
});
