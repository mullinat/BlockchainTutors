* API refactoring
    * Instead of having seperate names in both CreateTutor and CreateStudent contracts those contracts will now call another contract BlockAppsData, this register contract will map addresses to user ID numbers which are used on the platform. It will also store permissioned data by mapping bytes keys to strings and possibly other solidity data types
    * Update CreateStudent contract to use BlockAppsData
    * Make sure functionality of old contracts is replicated using BlocksAppData
    * Write some tests using Mocha and Chai built into truffle
    * Do the tests of course
    * Remove old contracts
* Add buttons to interact with and manage ones invoices
    * Pay with note
    * Deny
* Stuff to after
    * Add more trsting profiles and write a page that send you a bunch of invoices from the localhost web3 instance inside testrpc
    * Start working on Tutor Review platform using BlockAppsData
    * Create a messaging platform on the blockchain 
        * Gota do some more reasearch and try implementing existing solutions