module.exports = {
    users: [
      {
        id: 1,
        firstName: 'Oghenefegor',
        lastName: 'Iyara',
        email: 'fergusoniyara@gmail.com',
        password: 'somepassword',
      },
      {
        id: 2,
        firstName: 'Obadiah',
        lastName: 'Solomon',
        email: 'sobed2smile@gmail.com',
        password: 'password2',
      },
      {
        id: 3,
        firstName: 'Mike',
        lastName: 'Fortran',
        email: 'mfontana@gmail.com',
        password: 'daysOfYourLife',
        isAdmin: false,
      },
    ],
    accounts: [
      {
        id: 1,
        accountNo: 23826726278829,
        createdOn: 'Fri Mar 07 2019 12:06:36 GMT+0100 (West Africa Standard Time)',
        owner: 1,
        type: 'savings',
        status: 'active',
        opening_bal: 200000000.00,
        balance: 48676784000.00
      },
      {
        id: 6,
        accountNo: 3089298272728,
        createdOn: 'Mon Apr 02 2019 01:06:36 GMT+0100 (West Africa Standard Time)',
        owner: 2,
        type: 'current',
        status: 'active',
        opening_bal: 200000000.00,
        balance: 48676784000.00
      },
      {
        id: 7,
        accountNo: 2004556789,
        createdOn: 'Tue Apr 09 2019 00:06:36 GMT+0100 (West Africa Standard Time)',
        owner: 3,
        type: 'savings',
        status: 'active',
        opening_bal: 200000000.00,
        balance: 7800.00

      },
    ],
    transaction: [
      {
        id: 1,
        createdOn: 'Tue Apr 09 2019 01:06:36 GMT+0100 (West Africa Standard Time)',
        type: 'credit',
        accountNo: 2059725105,
        cashier: 3,
        transactionAmount: 250000.78,
        oldopening_bal: 0.00,
        newopening_bal: 250000.78,
      },
      {
        id: 5,
        createdOn: 'Thur Apr 11 2019 01:06:36 GMT+0100 (West Africa Standard Time)',
        type: 'debit',
        accountNo: 2059725109,
        cashier: 2,
        transactionAmount: 10000.78,
        oldopening_bal: 50000.00,
        newopening_bal: 39999.22,
      },
      {
        id: 10,
        createdOn: 'Mon Apr 15 2019 01:06:36 GMT+0100 (West Africa Standard Time)',
        type: 'credit',
        accountNo: 2059725105,
        cashier: 6,
        transactionAmount: 10000.00,
        oldopening_bal: 250000.78,
        newopening_bal: 260000.78,
      },
  
  
    ],
  };
  