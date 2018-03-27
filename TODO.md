* API refactoring
    * Instead of having seperate names in both CreateTutor and CreateStudent contracts those contracts will now call another contract RegisterUsername, this register username will map addresses to user ID numbers which are used on the platform
* Add buttons to interact with and manage ones invoices
    * Pay with note
    * Deny
* Add more trsting profiles and write a page that send you a bunch of invoices from the localhost web3 instance inside testrpc