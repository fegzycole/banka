export const signup = {
  email: 'required|email',
  firstName: 'required|string|alpha|min:2',
  lastName: 'required|string|alpha|min:2',
  password: 'required|string|alpha_num|min:5',
  type: ['required', { in: ['admin', 'cashier', 'customer'] }],
};

export const signIn = {
  email: 'required|email',
  password: 'required|string',
};

export const accountType = {
  type: ['required', { in: ['current', 'savings'] }],
};

export const changeStatus = {
  accountNumber: 'required|integer',
  status: ['required', { in: ['active', 'dormant'] }],
};
