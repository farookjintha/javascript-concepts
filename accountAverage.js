const testObj = {
    bankId: 13,
    accounts: [
        { accountName: "abc", currentBalance: { cash: 2000 }, subAccounts: [] },
        {
            accountName: "bcd",
            currentBalance: { cash: 5000 },
            subAccounts: [
                {
                    accountName: "efg",
                    currentBalance: { cash: 7000 },
                    subAccounts: [
                        {
                            accountName: "kge",
                            currentBalance: { cash: 6000 },
                            subAccounts: [],
                        },
                    ],
                },
                { accountName: "der", currentBalance: { cash: 8000 }, subAccounts: [] },
            ],
        },
    ],
};


