import { toast } from 'react-toastify';

export function toastEmitterSuccess(message = 'Success.') {
	toast.success(message);
}
export function toastEmitterError(message = 'Error.') {
	toast.error(message);
}
export function toastEmitterWarning(message = 'Warning.') {
	toast.warning(message);
}
