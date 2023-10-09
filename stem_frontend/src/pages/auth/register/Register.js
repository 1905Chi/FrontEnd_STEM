import { Form, Input, Button, Select } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import { url } from '../../../constants/Constant';
export default function Register() {
	const roles = ['STUDENT', 'TEACHER', 'PARENT'];
	const navigate = useNavigate()
	const handleNext = (values) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const data = {
			email: values.email,
			password: values.password,
			role: values.roles,
		};
		axios
			.post(url + 'api/auth/register', data,config)
			.then((response) => {
				// Xử lý kết quả sau khi gửi thành công
				if (response.statusCode === 200) {
					toast.success('Account created successfully , Plese check your email to verify your account');
					
				} 
				
			})
			.catch((error) => {
				// Xử lý lỗi nếu có lỗi xảy ra
				if (error.response) {
					// Lỗi từ phía máy chủ
					const status = error.response.status;
					if (status === 503) {
						// Xử lý lỗi 503 Service Unavailable
						toast.error('Máy chủ hiện không khả dụng. Vui lòng thử lại sau.');
					} else {
						toast.error(error.response.data.message);
					}
				} else if (error.request) {
					// Lỗi không có phản hồi từ máy chủ
					toast.error('Không thể kết nối đến máy chủ.');
				} else {
					// Lỗi trong quá trình thiết lập yêu cầu
					toast.error(error.response.error);
				}
			});

		// Xử lý logic xác thực email ở đây (gửi email xác thực, kiểm tra địa chỉ email, vv.)
		console.log(values);
	};
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};

	return (
		<div className="Register-form">
			<div className="register-body">
				<h2> Register </h2>
				<Form name="register" onFinish={handleNext} scrollToFirstError>
					<Form.Item
						name="email"
						label="E-mail"
						rules={[
							{
								type: 'email',
								message: 'Nhập email hợp lệ',
							},
							{
								required: true,
								message: 'Vui lòng nhập email của bạn',
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name="password"
						label="Password"
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập mật khẩu',
							},
						]}
						hasFeedback
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						name="confirm"
						label="Confirm Password"
						dependencies={['password']}
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Vui lòng xác thực lại mật khẩu',
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve();
									}
									return Promise.reject(new Error('Mật khẩu không khớp!'));
								},
							}),
						]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						label="Roles"
						name="roles"
						rules={[
							{
								required: true,
								message: 'Chọn loại tài khoản!',
							},
						]}
					>
						<Select
							showSearch
							ptionfilterprop="label"
							options={roles.map((item) => ({ label: item, value: item }))}
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" style={{ width: '100%' }}>
							Gửi
						</Button>
					</Form.Item>
				</Form>
			</div>
			<ToastContainer />
		</div>
	);
}
